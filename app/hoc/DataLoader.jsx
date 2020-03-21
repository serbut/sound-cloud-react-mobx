import React, {Component} from 'react';
import {action, computed, observable} from 'mobx';
import {observer} from 'mobx-react';
import {loadData, loadMore} from '../api';

@observer
export default class DataLoader extends Component {
  @observable.shallow data = [];
  @observable isLoading = false;
  @observable nextHref;
  @observable error;

  @computed get isLastPage() {
    return !this.nextHref;
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate({ url: prevUrl, params: prevParams }) {
    const { url, params } = this.props;

    if (url !== prevUrl || JSON.stringify(params) !== JSON.stringify(prevParams)) {
      this.clearData();
      this.loadData();
    }
  }

  loadData = () => {
    const { url, params } = this.props;

    if (!url) {
      return;
    }

    this.isLoading = true;

    loadData(url, params)
      .then(data => this.onSuccess(data))
      .catch(err => this.onError(err));
  };

  loadMore = () => {
    if (this.isLoading || this.isLastPage) {
      return;
    }

    const nextHref = this.nextHref;
    this.isLoading = true;

    loadMore(nextHref)
      .then(data => {
        // TODO: why we need this check ?
        if (nextHref === this.nextHref) {
          this.onSuccess(data);
        }
      })
      .catch(err => this.onError(err));
  };

  @action clearData = () => {
    this.error = null;
    this.data = [];
    this.nextHref = null;
  };

  @action onSuccess(data) {
    if (!data.collection.length) {
      this.nextHref = null;
      this.isLoading = false;
      return;
    }

    data.collection.forEach(el => this.data.push(el));
    this.nextHref = data.next_href;
    this.isLoading = false;
  }

  @action onError(err) {
    this.isLoading = false;
    this.error = 'Failed to load data';
  }

  render() {
    const {data, isLoading, isLastPage, error, loadData, loadMore, clearData} = this;

    return this.props.render({
      data,
      isLoading,
      isLastPage,
      error,
      loadMore,
    });
  }
}
