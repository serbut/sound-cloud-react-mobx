import axios from 'axios';
import SC from 'soundcloud';
import { CLIENT_ID } from '../config';
import { Collection } from '../models/api';
import { getToken, PAGE_SIZE } from './index';

let nextHref: string | undefined; // TODO: remove this

export const getNextHref = () => nextHref; // TODO: remove this

const formatNextHref = (href: string) => {
  if (!href.includes('client_id') && !href.includes('oauth_token')) {
    return (
      href +
      (getToken() ? `&oauth_token=${getToken()}` : `&client_id=${CLIENT_ID}`)
    );
  } else {
    return href;
  }
};

export const loadData = <T>(href: string, params: {}): Promise<Collection<T>> =>
  SC.get(href, { limit: PAGE_SIZE, linked_partitioning: 1, ...params }).then(
    (data: any) => {
      nextHref = data.next_href;
      return data;
    }
  );

export const loadMore = <T>(nextHref: string): Promise<Collection<T>> =>
  axios.get(formatNextHref(nextHref)).then(({ data }) => {
    nextHref = data.next_href;
    return data;
  });
