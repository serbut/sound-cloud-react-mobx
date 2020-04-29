import React from 'react';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  Index,
  InfiniteLoader,
  List,
  ListRowProps,
  WindowScroller,
} from 'react-virtualized';
import { Comment } from '../../models/comment';
import overscanIndicesGetter from '../../overscanIndicesGetter';
import CommentComponent from './SingleComment';

const cache = new CellMeasurerCache({
  defaultHeight: 73,
  minHeight: 73,
  fixedWidth: true,
});

export const CommentsList = ({
  comments,
  removeComment,
  loadMore,
  isLastPage,
}: {
  comments: Comment[] | null;
  removeComment: (comment: Comment) => void;
  loadMore: Function;
  isLastPage: boolean;
}) => {
  if (!comments) {
    return null;
  }

  const rowCount = isLastPage ? comments.length : comments.length + 1;

  const isRowLoaded = ({ index }: Index) => comments.length > index;

  const rowRenderer = ({ key, index, style, parent }: ListRowProps) => {
    const comment = comments[index];

    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}
      >
        <div style={style}>
          {comment ? (
            <CommentComponent comment={comment} removeComment={removeComment} />
          ) : null}
        </div>
      </CellMeasurer>
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
                  rowHeight={cache.rowHeight}
                  rowRenderer={rowRenderer}
                  scrollTop={scrollTop}
                  overscanIndicesGetter={overscanIndicesGetter}
                  deferredMeasurementCache={cache}
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
