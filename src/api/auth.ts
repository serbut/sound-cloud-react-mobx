import SC from 'soundcloud';

export const login = () => SC.connect().then(({ oauth_token }) => oauth_token);
