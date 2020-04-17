import { FunctionComponent, ReactElement, useEffect } from 'react';

// TODO: use external library
const InfiniteScrollComponent: FunctionComponent<{ load: Function }> = ({
  children,
  load,
}) => {
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        load();
      }
    };

    window.addEventListener('scroll', onScroll, false);

    return () => window.removeEventListener('scroll', onScroll, false);
  }, [load]);

  return children as ReactElement;
};

export default InfiniteScrollComponent;
