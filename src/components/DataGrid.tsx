import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import {
  AutoSizer,
  Index,
  InfiniteLoader,
  List,
  ListRowProps,
  WindowScroller,
} from 'react-virtualized';
import { Playlist } from '../models/playlist';
import { Track } from '../models/track';
import { User } from '../models/user';
import overscanIndicesGetter from '../overscanIndicesGetter';
import Error from './Error';
import PlaylistCard from './Playlist/PlaylistCard';
import { Spinner } from './Spinner';
import TrackCard from './Track/TrackCard';
import UserCard from './User/UserCard';

const MAX_CONTAINER_WIDTH = 1280;
const CONTAINER_PADDING = 24;
const MIN_CELL_WIDTH = 216;
const CELLS_PER_ROW = Math.floor(
  (Math.min(window.innerWidth, MAX_CONTAINER_WIDTH) - CONTAINER_PADDING * 2) /
    MIN_CELL_WIDTH
);

const renderCard = (item: Track | User | Playlist | null, data: any[]) => {
  if (!item) {
    return <div>Loading...</div>;
  }

  switch (item.kind) {
    case 'track':
      return <TrackCard track={item} tracks={data} />;
    case 'user':
      return <UserCard user={item} />;
    case 'playlist':
      return <PlaylistCard playlist={item} />;
    default:
      return null;
  }
};

const DataGrid = ({
  data,
  isLoading,
  isLastPage,
  error,
  loadMore = () => {},
}: {
  data: Array<Track | User | Playlist> | null | undefined;
  isLoading?: boolean;
  isLastPage: boolean;
  error: boolean;
  loadMore?: Function;
}) => {
  if (!data && isLoading) {
    return <Spinner />;
  }

  if (!data && isLastPage) {
    return <Typography variant="h2">Nothing to show</Typography>;
  }

  if (error) {
    return <Error>Can't load data</Error>;
  }

  if (!data) {
    return null;
  }

  const calculateHeight = (width: number) => {
    return width / CELLS_PER_ROW + 102;
  };

  const loadedRowCount = Math.ceil(data.length / CELLS_PER_ROW);
  const rowCount = isLastPage ? loadedRowCount : loadedRowCount + 1;

  const isRowLoaded = ({ index }: Index) => loadedRowCount > index;

  const rowRenderer = ({ key, index, style }: ListRowProps) => {
    const from = index * CELLS_PER_ROW;
    const to = from + CELLS_PER_ROW;
    const rowData: (Track | User | Playlist | null)[] = data.slice(from, to);

    while (rowData.length < CELLS_PER_ROW) {
      rowData.push(null);
    }

    return (
      <div key={key} style={style}>
        <Box px={1}>
          <Grid container spacing={2}>
            {rowData.map((item, index) => (
              <Grid
                item
                xs
                key={index}
                zeroMinWidth
                className="animated fadeIn"
              >
                {renderCard(item, data)}
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    );
  };

  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={() => loadMore()}
      rowCount={rowCount}
    >
      {({ onRowsRendered, registerChild }) => (
        <WindowScroller>
          {({ height, scrollTop }) => (
            <AutoSizer disableHeight>
              {({ width }) => (
                <List
                  onRowsRendered={onRowsRendered}
                  ref={registerChild}
                  autoHeight
                  height={height}
                  width={width}
                  rowCount={rowCount}
                  rowHeight={calculateHeight(width)}
                  rowRenderer={rowRenderer}
                  scrollTop={scrollTop}
                  overscanIndicesGetter={overscanIndicesGetter}
                  style={{
                    outline: 'none',
                  }}
                />
              )}
            </AutoSizer>
          )}
        </WindowScroller>
      )}
    </InfiniteLoader>
  );
};

export default DataGrid;
