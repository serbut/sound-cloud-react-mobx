import React, { Component } from "react";
import IconButton from "material-ui/IconButton";
import Input from "material-ui/Input/Input";

import "./SearchWidget.less";

class SearchWidget extends Component {
  state = {
    focused: false
  };

  clearSearch() {
    this.setState({ focused: false });
    this.textInput.input.value = "";
  }

  handleSearchClick = e => {
    if (this.state.focused) {
      return this.handleSubmit(e);
    }

    this.setState({ focused: true });
    this.textInput.input.focus();
  };

  handleCloseClick = e => this.setState({ focused: false });

  handleSubmit = e => {
    e.preventDefault();
    var q = this.textInput.input.value;
    if (q !== "") {
      this.props.handleSearch(q);
      this.clearSearch();
    }
  };

  render() {
    return (
      <form
        className={"search-widget" + (this.state.focused ? " focused" : "")}
        onSubmit={this.handleSubmit}
      >
        <IconButton
          className="search-btn"
          ripple={false}
          onTouchTap={this.handleSearchClick}
        >
          search
        </IconButton>
        <IconButton
          className="search-close-btn"
          ripple={false}
          onTouchTap={this.handleCloseClick}
        >
          close
        </IconButton>
        <Input
          className="search-input"
          placeholder="Search"
          ref={input => (this.textInput = input)}
        />
      </form>
    );
  }
}

export default SearchWidget;
