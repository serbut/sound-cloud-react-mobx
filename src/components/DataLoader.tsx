import useDataLoader from '../hooks/use-data-loader';

const DataLoader = ({
  url,
  params = {},
  render,
}: {
  url: string;
  params?: { [key: string]: string | number | boolean };
  render: Function;
}) => {
  const all = useDataLoader<any>(url, params);

  return render(all);
};

export default DataLoader;
