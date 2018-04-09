import React, {Component} from 'react';
import ShowCard from './ShowCard'
import preload from '../data.json';

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: 'Some search string'
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
    
  }
  render () {
    return ( 
      <div className="search">
      <div>
        <header>
          <h1>MSK Video</h1>
          <input 
            onChange={this.handleSearchTermChange} 
            value={this.state.searchTerm} 
            type="text" 
            placeholder="Search"/>
        </header>
      </div>
      <div>
        {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} /> )}
      </div>
    </div>
    );
  }
}

export default Search;
