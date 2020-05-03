import { Typography } from '@material-ui/core';
import React from 'react';
import { Index, ListRowProps } from 'react-virtualized';
import { useIsResizing } from '../hooks/use-is-resizing';
import { Playlist } from '../models/playlist';
import { Track } from '../models/track';
import { User } from '../models/user';
import { DataGridRow } from './DataGridRow';
import Error from './Error';
import { Spinner } from './Spinner';
import { VirtualList } from './VirtualList';

const MAX_CONTAINER_WIDTH = 1280;
const CONTAINER_PADDING = 24;
const MIN_CELL_WIDTH = 216;
const CARD_CONTENT_HEIGHT = 102;

const DataGrid = ({
  data,
  isLoading,
  isLastPage,
  error,
  loadMore = () => {},
}: {
  data: (Track | User | Playlist)[];
  isLoading: boolean;
  isLastPage: boolean;
  error: boolean;
  loadMore?: Function;
}) => {
  const resizing = useIsResizing();

  if (resizing) {
    return <div>Resizing...</div>;
  }

  if (!data.length && isLoading) {
    return <Spinner />;
  }

  if (!data && isLastPage) {
    return <Typography variant="h2">Nothing to show</Typography>;
  }

  if (error) {
    return <Error>Can't load data</Error>;
  }

  const containerWidth =
    Math.min(window.innerWidth, MAX_CONTAINER_WIDTH) - CONTAINER_PADDING * 2;

  const perRow = Math.floor(containerWidth / MIN_CELL_WIDTH);

  const loadedRowCount = Math.ceil(data.length / perRow);

  const rowCount = isLastPage ? loadedRowCount : loadedRowCount + 1;

  const rowHeigth = containerWidth / perRow + CARD_CONTENT_HEIGHT;

  const isRowLoaded = ({ index }: Index) => loadedRowCount > index;

  const rowRenderer = ({ key, index, style }: ListRowProps) => {
    const from = index * perRow;
    const to = from + perRow;
    const rowData: (Track | User | Playlist | null)[] = data.slice(from, to);

    while (rowData.length < perRow) {
      rowData.push(null);
    }

    return (
      <div key={key} style={style}>
        <DataGridRow data={rowData} allData={data} />
      </div>
    );
  };

  return (
    <VirtualList
      isRowLoaded={isRowLoaded}
      loadMore={loadMore}
      rowCount={rowCount}
      rowHeight={rowHeigth}
      rowRenderer={rowRenderer}
    />
  );
};

export default DataGrid;
