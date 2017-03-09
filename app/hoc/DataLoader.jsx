import React, { Component } from 'react';
import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';

import { loadData, loadMore } from '../api';

export default function (InnerComponent) {

  @observer
  class DataLoader extends Component {
    @observable.shallow data = [];
    @observable isLoading;
    @observable nextHref;

    @computed get isLastPage() {
      return !this.nextHref;
    }

    loadData = (href, opts) => {
      this.isLoading = true;
      loadData(href, opts).then(data => this.callback(data, true));
    }

    loadMore = () => {
      if (this.isLoading || this.isLastPage)
        return;

      const nextHref = this.nextHref;
      this.isLoading = true;

      loadMore(nextHref).then(data => {
        if (nextHref === this.nextHref)
          this.callback(data);
      });
    }

    @action callback(data, replace) {
      if (!data.collection.length) {
        this.nextHref = null;
        this.isLoading = false;
        return;
      }

      if (replace)
        this.data = data.collection;
      else
        data.collection.forEach(i => this.data.push(i));
      this.nextHref = data.next_href;
      this.isLoading = false;
    }

    clearData() {
      this.data = [];
      this.nextHref = null;
    }

    render() {
      return <InnerComponent {...this.props}
        data={this.data}
        isLoading={this.isLoading}
        isLastPage={this.isLastPage}

        loadData={this.loadData}
        loadMore={this.loadMore}
        clearData={this.clearData.bind(this)} />;
    }
  }

  return DataLoader;
}
