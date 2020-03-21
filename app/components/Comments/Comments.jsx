import {CircularProgress, List, Typography} from '@material-ui/core';
import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {addComment, getTrackCommentsUrl, removeComment} from '../../api';
import DataLoader from '../../hoc/DataLoader';
import InfiniteScrollify from '../../hoc/InfiniteScrollify';
import Error from '../Error';
import CommentForm from './CommentForm';
import Comment from './SingleComment';

@inject('sessionStore', 'playerStore')
@observer
export default class Comments extends Component {

  addComment = (commentBody) => {
    const { playerStore, sessionStore, trackId } = this.props;
    const timestamp = playerStore.track && playerStore.track.id === trackId ? playerStore.progress * 1000 : null;

    (sessionStore.isLoggedIn ? Promise.resolve() : sessionStore.login())
      .then(() => {
        addComment(trackId, commentBody, timestamp)
          // .then(res => comments.unshift(res)); TODO: addComment
      });
  };

  removeComment = (comment) => {
    removeComment(comment.track_id, comment.id)
      // .then(res => comments.remove(comment)); TODO: removeComment
  };

  render() {
    const { trackId } = this.props;
    const { addComment, removeComment } = this;

    return (
      <div>
        <Typography variant="h5">Leave a comment</Typography>
        <CommentForm addComment={addComment}></CommentForm>
        <br/>

        <DataLoader
          url={getTrackCommentsUrl(trackId)}
          render={({data: comments, isLoading, loadMore, error}) =>
            <div>
              <InfiniteScrollify load={loadMore}>
                <List>
                  {comments.map((comment, i) =>
                    <Comment key={comment.id} comment={comment} removeComment={removeComment}/>
                  )}
                </List>
              </InfiniteScrollify>

              {isLoading && <div className='loader-wrap'><CircularProgress/></div>}

              {error && <Error>{'Failed to load comments'}</Error>}
            </div>
          }
          />
      </div>
    )
  }
}
