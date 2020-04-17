import { Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import {
  Index,
  InfiniteLoader,
  List,
  ListRowProps,
  WindowScroller,
} from 'react-virtualized';

import overscanIndicesGetter from '../defaultOverscanIndicesGetter';
import { Playlist } from '../models/playlist';
import { Track } from '../models/track';
import { User } from '../models/user';
import Error from './Error';
import PlaylistCard from './Playlist/PlaylistCard';
import { Spinner } from './Spinner';
import TrackCard from './Track/TrackCard';
import UserCard from './User/UserCard';

const CELL_HEIGHT = 316;
const CELL_WIDTH = 216;
const CELLS_IN_ROW = 5;
const WIDTH = CELL_WIDTH * CELLS_IN_ROW;

const cellStyle = {
  flex: '0 0 auto',
  boxSizing: 'border-box' as 'border-box',
  padding: 8,
  width: CELL_WIDTH,
};

const rowStyle = {
  display: 'flex',
};

const listStyle = {
  outline: 'none',
};

const renderCard = (item: Track | User | Playlist, data: any[]) => {
  switch (item.kind) {
    case 'track':
      return <TrackCard track={item} tracks={data} />;
    case 'user':
      return <UserCard user={item} />;
    case 'playlist':
      return <PlaylistCard playlist={item} />;
  }
};

const DataGrid = ({
  data,
  isLoading,
  isLastPage,
  error,
  loadMore = () => {},
}: {
  data: Array<Track | User | Playlist> | null;
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

  const loadedRowCount = Math.ceil(data.length / CELLS_IN_ROW);
  const rowCount = isLastPage ? loadedRowCount : loadedRowCount + 1;

  const isRowLoaded = ({ index }: Index) => loadedRowCount > index;

  const rowRenderer = ({ key, index, style }: ListRowProps) => {
    const from = index * CELLS_IN_ROW;
    const to = from + CELLS_IN_ROW;
    const rowData = data.slice(from, to);

    if (rowData.length === 0) {
      return (
        <div key={key} style={style}>
          <Spinner />
        </div>
      );
    }

    return (
      <div key={key} style={{ ...style, ...rowStyle }}>
        {rowData.map((item) => (
          <div key={item.id} className="animated fadeIn" style={cellStyle}>
            {renderCard(item, data)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <WindowScroller>
      {({ height, scrollTop }) => (
        <InfiniteLoader
          isRowLoaded={isRowLoaded}
          loadMoreRows={() => loadMore()}
          rowCount={rowCount}
          threshold={0}
        >
          {({ onRowsRendered, registerChild }) => (
            <List
              ref={registerChild}
              onRowsRendered={onRowsRendered}
              autoHeight
              height={height}
              rowCount={rowCount}
              rowHeight={CELL_HEIGHT}
              rowRenderer={rowRenderer}
              scrollTop={scrollTop}
              width={WIDTH}
              overscanRowCount={10}
              overscanIndicesGetter={overscanIndicesGetter}
              style={listStyle}
            />
          )}
        </InfiniteLoader>
      )}
    </WindowScroller>
  );
};

export default observer(DataGrid);
