import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

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
        label='Write a comment'
        value={this.commentBody}
        onChange={this.handleInputChange}
      />
    </form>
  }
}
