import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import SearchSuggestions from "./components/SearchSuggestions";
import "./App.scss";

import { BANDS } from "./mocks/bands";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      results: [],
      highlightValue: 0,
    };
  }
  // I saved some time here, i could have done a little debounce so this will not be executed for each key pressed,
  // but again i wanted to save time, but this would be ideally inside a debouce function.
  updateDynamicField = (field, value) => {
    let options = {[field]: value}
    if(field === "searchvalue") options = {search: value, results: [], highlight: 0};
    if(field === "search") this.onSearch(value);
    this.setState({...options});   
  };

  onSearch = async (value) => {
    const data = await this.getBands();
    const results = data.filter((item) => this.filterResults(item.name, value));
    this.setState({ results });
  };

  //this emulates the delay from a real service
  // i tried to save some time, this would be normally a /service/file but you get the idea.
  getBands = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(BANDS);
      }, 1000);
    });
  };
  // There are a lot of ways of doing this, i decided to go with matching the first letters of the query with the available names accordingly,
  // this can also be done with a regex to check if the letters written during the search are contained inside the suggestions, but i wanted to be within the time asked
  // for the test.
  filterResults = (name, searchText) => {
    name = name.toLowerCase().substring(0, searchText.length);
    if (searchText == "") return false;
    return name == searchText.toLowerCase();
  };

  render() {
    const { results, search } = this.state;
    // i could have used Context api for this but without the use of hooks this is the quick way.
    return (
      <div className="App">
        <SearchBar
          search={search}
          updateDynamicField={this.updateDynamicField}
          suggestions={results}
          highlightValue={this.state.highlightValue}
        />
        <SearchSuggestions
          suggestions={results}
          highlight={this.state.highlightValue}
          updateDynamicField={this.updateDynamicField}
        />
      </div>
    );
  }
}
