import React from 'react';
import {
  CellMeasurer,
  CellMeasurerCache,
  Index,
  ListRowProps,
} from 'react-virtualized';
import { Comment } from '../../models/comment';
import { VirtualList } from '../VirtualList';
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
    <VirtualList
      isRowLoaded={isRowLoaded}
      loadMore={loadMore}
      rowCount={rowCount}
      rowHeight={cache.rowHeight}
      rowRenderer={rowRenderer}
      deferredMeasurementCache={cache}
    />
  );
};
