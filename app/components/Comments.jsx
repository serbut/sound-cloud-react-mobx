import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {List, ListSubheader} from 'material-ui/List';
import {CircularProgress} from 'material-ui/Progress';
import Comment from './SingleComment';
import InfiniteScrollify from '../hoc/InfiniteScrollify';
import {addComment, removeComment} from '../api';
import DataLoader from '../hoc/DataLoader';
import CommentForm from './CommentForm';

@inject('sessionStore', 'playerStore')
@observer
export default class Comments extends Component {

  addComment = (commentBody) => {
    const { playerStore, sessionStore, trackId } = this.props;
    const timestamp = playerStore.track && playerStore.track.id === trackId ? playerStore.progress * 1000 : null;

    (sessionStore.isLoggedIn ? Promise.resolve() : sessionStore.login())
      .then(() => {
        addComment(trackId, commentBody, timestamp)
          // .then(res => comments.unshift(res)); TODO
      });
  };

  removeComment = (comment) => {
    removeComment(comment.track_id, comment.id)
      // .then(res => comments.remove(comment)); TODO
  };

  render() {
    const { trackId } = this.props;
    const { addComment, removeComment } = this;

    return (
      <div>
        <CommentForm addComment={addComment}></CommentForm>

        <DataLoader
          url={`tracks/${trackId}/comments`}
          render={({data: comments, isLoading, loadMore}) =>
            <div>
              <InfiniteScrollify load={loadMore}>
                <List subheader={<ListSubheader>Comments</ListSubheader>}>
                  {comments.map((comment, i) =>
                    <Comment key={comment.id} comment={comment} removeComment={removeComment}/>
                  )}
                </List>
              </InfiniteScrollify>

              {isLoading && <div className='loader-wrap'><CircularProgress/></div>}
            </div>
          }
          />
      </div>
    )
  }
}
