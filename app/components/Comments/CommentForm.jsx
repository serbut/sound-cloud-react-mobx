import {TextField} from '@material-ui/core';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import React, {Component} from 'react';

// TODO: add validation
@observer
export default class CommentForm extends Component{
  @observable commentBody = '';

  handleInputChange = (e) => {
    this.commentBody = e.target.value
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    if (!this.commentBody) {
      return;
    }

    this.props.addComment(this.commentBody);

    this.commentBody = '';
  };

  render() {
    return <form onSubmit={this.handleFormSubmit}>
      <TextField
        label='Enter comment text'
        value={this.commentBody}
        onChange={this.handleInputChange}
        fullWidth
      />
    </form>
  }
}
