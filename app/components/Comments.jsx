import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import {List, ListSubheader} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import {CircularProgress} from 'material-ui/Progress';
import Comment from './SingleComment';
import InfiniteScrollify from '../hoc/InfiniteScrollify';
import {addComment, removeComment} from '../api';
import DataLoader from "../hoc/DataLoader";

@inject('sessionStore', 'playerStore') @observer
class Comments extends Component {
  @observable commentBody = '';

  componentDidMount() {
    this.loadComments();
  }

  componentWillReceiveProps (nextProps, nextState) {
    if (nextProps.trackId !== this.props.trackId) {
      this.loadComments()
    }
  }

  loadComments() {
    const {loadData, trackId} = this.props;
    loadData(`tracks/${trackId}/comments`);
  }

  addComment() {
    const { playerStore, data: comments } = this.props;
    const trackId = comments[0].track_id;
    const timestamp = playerStore.track && playerStore.track.id === trackId ? playerStore.progress * 1000 : null;

    addComment(trackId, this.state.commentBody, timestamp)
      .then(res => comments.unshift(res));

    this.commentBody = '';
  }

  removeComment = (comment) => {
    const { data: comments } = this.props;

    removeComment(comment.track_id, comment.id)
      .then(res => comments.remove(comment));
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { sessionStore } = this.props;

    if (!this.commentBody)
      return;

    if (sessionStore.isLoggedIn)
      this.addComment();
    else
      sessionStore.login()
        .then(() => this.addComment());
  };

  render() {
    const { data: comments, isLoading } = this.props;
    const { handleFormSubmit, removeComment, commentBody } = this;

    return (
      <div>
        <form action='' onSubmit={handleFormSubmit}>
          <TextField
            label='Write a comment'
            value={commentBody}
            onChange={(e) => { this.commentBody = e.target.value }}
          />
        </form>

        <List subheader={<ListSubheader>Comments</ListSubheader>}>
          {comments.map((comment, i) =>
            <Comment key={comment.id} comment={comment} removeComment={removeComment} />
          )}
        </List>

        {isLoading &&
          <div className='loader-wrap'><CircularProgress /></div>
        }
      </div>
    )
  }
}

export default DataLoader(InfiniteScrollify(Comments));
