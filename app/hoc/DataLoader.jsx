import React, {Component} from 'react';
import {action, computed, observable} from 'mobx';
import {observer} from 'mobx-react';
import {loadData, loadMore} from '../api';

@observer
export default class DataLoader extends Component {
  @observable.shallow data = [];
  @observable isLoading = false;
  @observable nextHref;

  @computed get isLastPage() {
    return !this.nextHref;
  }

  componentDidMount() {
    const { url, params } = this.props;
    this.loadData(url, params);
  }

  componentWillReceiveProps(nextProps) {
    const { url, params } = this.props;
    const {url: nextUrl, params: nextParams} = nextProps;

    if (url !== nextUrl || JSON.stringify(params) !== JSON.stringify(nextParams)) {
      this.clearData();
      this.loadData(nextUrl, nextParams);
    }
  }

  loadData = (url, params) => {
    if (!url) {
      return;
    }
    this.isLoading = true;
    loadData(url, params).then(data => this.callback(data, true));
  };

  loadMore = () => {
    if (this.isLoading || this.isLastPage) {
      return;
    }

    const nextHref = this.nextHref;
    this.isLoading = true;

    loadMore(nextHref).then(data => {
      // TODO: why we need this check ?
      if (nextHref === this.nextHref) {
        this.callback(data);
      }
    });
  };

  clearData = () => {
    this.data = [];
    this.nextHref = null;
  };

  @action callback(data, replace) {
    if (!data.collection.length) {
      this.nextHref = null;
      this.isLoading = false;
      return;
    }

    if (replace) {
      this.data = data.collection;
    } else {
      data.collection.forEach(el => this.data.push(el));
    }

    this.nextHref = data.next_href;
    this.isLoading = false;
  }

  render() {
    const {data, isLoading, isLastPage, loadData, loadMore, clearData} = this;

    return this.props.render({
      data,
      isLoading,
      isLastPage,
      loadData,
      loadMore,
      clearData
    });
  }
}

