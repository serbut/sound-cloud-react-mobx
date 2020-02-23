import React from 'react';
import {observer} from 'mobx-react';
import {CircularProgress} from 'material-ui/Progress';
import Text from 'material-ui/Text';
import {InfiniteLoader, List, WindowScroller} from 'react-virtualized';
import 'react-virtualized/styles.css';
import overscanIndicesGetter from '../defaultOverscanIndicesGetter.js';
import './DataGrid.less';
import TrackCard from './TrackCard';
import PlaylistCard from './PlaylistCard';
import UserCard from './UserCard';

const COLUMN_COUNT = 5;
const CELL_HEIGHT = 316;
const CELL_WIDTH = 216;

const DataGrid = ({ data, isLoading, isLastPage, loadMore }) => {
  if (!data.length && isLoading)
    return <div className="loader-wrap"><CircularProgress /></div>;

  if (!data.length && isLastPage)
    return <Text type='display2' align='center'>Nothing to show :(</Text>;

  const initialRowCount = Math.ceil(data.length / COLUMN_COUNT);
  const rowCount = isLastPage ? initialRowCount : initialRowCount + 1;
  const width = CELL_WIDTH * COLUMN_COUNT;
  const rowHeight = CELL_HEIGHT;

  function isRowLoaded({ index }) {
    return initialRowCount > index;
  }

  function rowRenderer({ key, index, isScrolling, isVisible, style }) {
    const from = index * COLUMN_COUNT;
    const to = from + COLUMN_COUNT;

    return (
      <div key={key} style={{ ...style, display: 'flex' }}>
        {data.slice(from, to).map((item, i) =>
          <div key={i} className='layout-item animated fadeIn'>
            {item.kind === 'user' ? <UserCard user={item} /> :
              item.kind === 'playlist' ? <PlaylistCard playlist={item} /> :
                item.kind === 'track' ? <TrackCard track={item} tracks={data} /> :
                  null}
          </div>
        )}
      </div>
    )
  }

  return (
    <WindowScroller>
      {({ height, isScrolling, scrollTop }) => (
        <InfiniteLoader
          isRowLoaded={isRowLoaded}
          loadMoreRows={() => loadMore()}
          rowCount={rowCount}
        >
          {({ onRowsRendered, registerChild }) => (
            <List
              ref={registerChild}
              onRowsRendered={onRowsRendered}
              autoHeight
              height={height}
              rowCount={rowCount}
              rowHeight={rowHeight}
              rowRenderer={rowRenderer}
              scrollTop={scrollTop}
              width={width}
              overscanRowCount={5}
              overscanIndicesGetter={overscanIndicesGetter}
              style={{ outline: 'none' }}
            />
          )}
        </InfiniteLoader>
      )}
    </WindowScroller>
  );
};

export default observer(DataGrid);
