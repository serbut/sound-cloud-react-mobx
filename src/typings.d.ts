declare module 'soundcloud' {
  export function initialize(options: {
    client_id: string;
    redirect_uri?: string;
    oauth_token?: string;
  }): void;

  export function connect(options?: {
    client_id: string;
    redirect_uri: string;
    scope: string;
  }): Promise<{ oauth_token: string }>;

  export function get<T>(path: string, params?: Object): Promise<T>;
  export function post<T>(path: string, params?: Object | FormData): Promise<T>;
  export function put<T>(path: string, params?: Object): Promise<T>;
  function _delete<T>(path: string): Promise<T>;
  export { _delete as delete };
}
