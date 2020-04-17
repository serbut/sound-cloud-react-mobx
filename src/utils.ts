import moment from 'moment';

import { ImageSize } from './enums';
import { Track } from './models/track';

const BAD_URL = '//a1.sndcdn.com/images/';
const PREVIEW_DURATION = 30000;

export function isElementInViewport(el: Element) {
  //special bonus for those using jQuery
  // if (typeof jQuery === 'function' && el instanceof window.jQuery) {
  //   el = el[0];
  // }

  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /*or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /*or $(window).width() */
  );
}

export function getImageUrl(url: string, size = ImageSize.large) {
  if (!url || url.includes(BAD_URL)) {
    return '//placehold.it/1x1';
  }

  return url.replace(ImageSize.large, size);
}

export function formatDuration(ms: number) {
  const duration = moment.duration(ms);

  if (duration.asHours() > 1)
    return (
      Math.floor(duration.asHours()) +
      moment.utc(duration.asMilliseconds()).format(':mm:ss')
    );
  else return moment.utc(duration.asMilliseconds()).format('mm:ss');
}

export function formatNumber(value: number) {
  if (!value) return '0';
  if (value / 10000 < 1) return value.toLocaleString();
  if (value / 1000000 < 1) return Math.round(value / 1000) + 'K';

  return Math.round((value / 1000000) * 10) / 10 + 'M';
}

export function fromNow(createdAt: string) {
  return moment(new Date(createdAt)).from(moment());
}

// TODO: remove?
// export function getUserLocation(user: User) {
//   if (!user) return;
//   if (user.city && user.country) return `${user.city}, ${user.country}`;
//   if (user.city) return user.city;
//   if (user.country) return user.country;
// }

export function getTags(text: string) {
  if (!text) return [];

  return (text.match(/\w+|"[^"]+"/g) || []).map(
    (tag) => '#' + tag.replace(/"/g, '')
  );
}

export const isPreview = (track: Track) => track.duration === PREVIEW_DURATION;

// TODO: remove?
// split by rows & remove extraneous new lines
export function formatText(text: string) {
  if (text)
    return text
      .split('\n')
      .filter(
        (row, i, arr) =>
          !(row === '' && (arr[i - 1] === '' || i === arr.length - 1))
      );
}

// TODO: remove?
// - find tags #tag
// - find users @user.permalink
// - find links http://link... or link.com... or www.link... or <a href="">...</a>
// - escape <b>...</b> tag, others ?
// - replace &gt; $lt;
// export function linkifyText(text) {
//     return text.replace(URL_REGEXP, '<a href="$&" target="_blank">$&</a>');
// }
