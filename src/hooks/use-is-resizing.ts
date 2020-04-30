import { useEffect, useState } from 'react';

export const useIsResizing = () => {
  const [resizing, setResizing] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: number;

    const onResize = () => {
      setResizing(true);
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => setResizing(false), 200);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return resizing;
};
