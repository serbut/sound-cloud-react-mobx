import React from 'react';
import {
  AutoSizer,
  CellMeasurerCache,
  Index,
  InfiniteLoader,
  List,
  WindowScroller,
} from 'react-virtualized';
import { ListRowRenderer } from 'react-virtualized/dist/es/List';
import overscanIndicesGetter from '../overscanIndicesGetter';

export const VirtualList = ({
  isRowLoaded,
  loadMore,
  rowCount,
  rowHeight,
  rowRenderer,
  deferredMeasurementCache,
}: {
  isRowLoaded: (params: Index) => boolean;
  loadMore: Function;
  rowCount: number;
  rowHeight: number | ((params: Index) => number);
  rowRenderer: ListRowRenderer;
  deferredMeasurementCache?: CellMeasurerCache;
}) => {
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
                  rowHeight={rowHeight}
                  rowRenderer={rowRenderer}
                  scrollTop={scrollTop}
                  overscanIndicesGetter={overscanIndicesGetter}
                  deferredMeasurementCache={deferredMeasurementCache}
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
