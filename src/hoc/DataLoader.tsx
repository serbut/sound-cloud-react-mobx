import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { AppContext } from '../app-context';

import { Collection } from '../models/api';
import { Playlist } from '../models/playlist';
import { Track } from '../models/track';
import { User } from '../models/user';

@observer
class DataLoader extends Component<{
  url?: string;
  params?: any;
  render: Function;
}> {
  static contextType = AppContext;
  context!: React.ContextType<typeof AppContext>;

  @observable.shallow data: Array<Track | User | Playlist> = [];
  @observable isLoading = false;
  @observable nextHref: string | undefined | null;
  @observable error: string | null = null;

  @computed get isLastPage() {
    return !this.nextHref;
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate({
    url: prevUrl,
    params: prevParams,
  }: {
    url?: string;
    params?: any;
  }) {
    const { url, params } = this.props;

    if (
      url !== prevUrl ||
      JSON.stringify(params) !== JSON.stringify(prevParams)
    ) {
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

    this.context.api
      .loadData<any>(url, params)
      .then((data) => this.onSuccess(data))
      .catch(() => this.onError());
  };

  loadMore = () => {
    if (this.isLoading || this.isLastPage) {
      return;
    }

    const nextHref = this.nextHref;

    if (!this.nextHref) {
      return;
    }

    this.context.api
      .loadMore<any>(nextHref as string)
      .then((data: any) => {
        // TODO: why we need this check ?
        if (nextHref === this.nextHref) {
          this.onSuccess(data);
        }
      })
      .catch(() => this.onError());
    this.isLoading = true;
  };

  @action clearData = () => {
    this.error = null;
    this.data = [];
    this.nextHref = null;
  };

  @action onSuccess(data: Collection<any>) {
    if (!data.collection.length) {
      this.nextHref = null;
      this.isLoading = false;
      return;
    }

    data.collection.forEach((el: any) => this.data.push(el));
    this.nextHref = data.next_href;
    this.isLoading = false;
  }

  @action onError() {
    this.isLoading = false;
    this.error = 'Failed to load data';
  }

  render() {
    const { data, isLoading, isLastPage, error, loadMore } = this;

    return this.props.render({
      data,
      isLoading,
      isLastPage,
      error,
      loadMore,
    });
  }
}

export default DataLoader;
