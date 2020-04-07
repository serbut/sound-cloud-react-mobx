import { TextField } from '@material-ui/core';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';

// TODO: add validation
@observer
class CommentForm extends Component<{ addComment: Function }> {
  @observable commentBody = '';

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.commentBody = event.target.value;
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!this.commentBody) {
      return;
    }

    this.props.addComment(this.commentBody);

    this.commentBody = '';
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <TextField
          label="Enter comment text"
          value={this.commentBody}
          onChange={this.handleInputChange}
          fullWidth
        />
      </form>
    );
  }
}

export default CommentForm;
