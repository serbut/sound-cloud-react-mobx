import React, {Component} from 'react';
import {action, computed, observable} from 'mobx';
import {observer} from 'mobx-react';
import {loadData, loadMore} from '../api';

export default function (InnerComponent) {

  @observer
  class DataLoader extends Component {
    @observable.shallow data = [];
    @observable isLoading = false;
    @observable nextHref;

    @computed get isLastPage() {
      return !this.nextHref;
    }

    componentDidMount() {
      const { url, options } = this.props;
      this.loadData(url, options);
    }

    componentWillReceiveProps(nextProps) {
      const { url, options } = this.props;
      const {url: nextUrl, options: nextOptions} = nextProps;

      if (url !== nextUrl || JSON.stringify(options) !== JSON.stringify(nextOptions)) {
        this.clearData();
        this.loadData(nextUrl, nextOptions);
      }
    }

    loadData = (href, opts) => {
      this.isLoading = true;
      loadData(href, opts).then(data => this.callback(data, true));
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

      if (this.props.render) {
        return this.props.render({
          data,
          isLoading,
          isLastPage,
          loadData,
          loadMore,
          clearData
        })
      }

      return <InnerComponent {...this.props}
        data={data}
        isLoading={isLoading}
        isLastPage={isLastPage}
        loadData={loadData}
        loadMore={loadMore}
        clearData={clearData} />;
    }
  }

  return DataLoader;
}
