// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  clickIcon = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <ul className="search-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="arrow"
            />
            <input
              type="search"
              className="input"
              placeholder="Search..."
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          {searchResults.map(each => (
            <SuggestionItem
              onClickIcon={this.clickIcon}
              data={each}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
