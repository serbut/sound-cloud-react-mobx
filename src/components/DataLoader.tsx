import useDataLoader from '../hooks/use-data-loader';

const DataLoader = ({
  url,
  params = {},
  render,
}: {
  url?: string;
  params?: { [key: string]: string };
  render: Function;
}) => {
  const [data, isLoading, isLastPage, error, loadMore] = useDataLoader(
    url,
    params
  );

  return render({
    data,
    isLoading,
    isLastPage,
    error,
    loadMore,
  });
};

export default DataLoader;
