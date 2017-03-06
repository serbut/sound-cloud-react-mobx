export const isDev = process.env.NODE_ENV !== 'production';

export const REDIRECT_URI = isDev ?
  `${window.location.protocol}//${window.location.host}/callback` :
  'http://serjp.github.io/callback';

export const CLIENT_ID = isDev ?
  'IrPMGeU7yK6uFyuptLxVtWE2tiuphX8t' :
  'BqVqkdpqbop0oQLZJ4OyaW7U0UpyytJS';

export const COOKIE_PATH = 'accessToken';

export const APP_TITLE = 'SoundConnect';
