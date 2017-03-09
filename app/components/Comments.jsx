import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { List, ListSubheader } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import { CircularProgress } from 'material-ui/Progress';

import Comment from './SingleComment';
import InfiniteScrollify from '../hoc/InfiniteScrollify';
import { addComment, removeComment } from '../api';

@inject('sessionStore', 'playerStore') @observer
class Comments extends Component {
  state = {
    commentBody: ''
  }

  addComment() {
    const { playerStore } = this.props;
    const trackId = this.props.comments[0].track_id;
    const timestamp = playerStore.track && playerStore.track.id === trackId ? playerStore.progress * 1000 : null;

    addComment(trackId, this.state.commentBody, timestamp)
      .then(res => this.props.comments.unshift(res));

    this.setState({ commentBody: '' });
  }

  removeComment = (comment) => {
    removeComment(comment.track_id, comment.id)
      .then(res => this.props.comments.remove(comment));
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { sessionStore } = this.props;

    if (!this.state.commentBody)
      return;

    if (sessionStore.isLoggedIn)
      this.addComment();
    else
      sessionStore.login()
        .then(() => this.addComment());
  }

  render() {
    const { comments, isLoading } = this.props;

    return (
      <div>
        <form action='' onSubmit={this.handleFormSubmit}>
          <TextField
            label='Write a comment'
            value={this.state.commentBody}
            onChange={(e) => this.setState({ commentBody: e.target.value })}
          />
        </form>

        <List subheader={<ListSubheader>Comments</ListSubheader>}>
          {comments.map((comment, i) =>
            <Comment key={comment.id} comment={comment} removeComment={this.removeComment} />
          )}
        </List>

        {isLoading &&
          <div className='loader-wrap'><CircularProgress /></div>
        }
      </div>
    )
  }
}

export default InfiniteScrollify(Comments);
