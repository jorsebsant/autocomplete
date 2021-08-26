import React, { Component } from "react";
import "./SearchBar.scss";

export default class SearchBar extends Component {
  onKeyDown = (e) => {
    const { suggestions, highlightValue, updateDynamicField } = this.props;

    switch (e.keyCode) {
      case 13: // enter
        updateDynamicField("searchvalue", suggestions[highlightValue].name);
        break;
      case 38: // up
        if (highlightValue > 0) {
          updateDynamicField("highlightValue", highlightValue - 1);
        }
        break;
      case 40: // down
        if (highlightValue < suggestions.length - 1) {
          updateDynamicField("highlightValue", highlightValue + 1);
        }
        break;
    }
  };

  render() {
    const { search, updateDynamicField } = this.props;
    return (
      <input
        className="search"
        placeholder="Search for your band...."
        value={search}
        onChange={(e) => updateDynamicField("search", e.target.value)}
        onKeyDown={this.onKeyDown}
        tabIndex={0}
      />
    );
  }
}
