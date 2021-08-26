import React, { Component } from "react";
import "./SearchSuggestions.scss";

export default class SearchSuggestions extends Component {
  render() {
    const { suggestions, updateDynamicField, highlight } =
      this.props;

    return (
      <div
        className="search-suggestions"
      >
        {suggestions.map((item, index) => {
          const highlightedClass =
            index === highlight ? "search-suggestions__item--highlight" : "";
          return (
            <div
              className={`search-suggestions__item ${highlightedClass}`}
              key={index}
              onMouseOver={() => updateDynamicField("highlight", index)}
              onClick={() => updateDynamicField("searchvalue", item.name)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    );
  }
}
