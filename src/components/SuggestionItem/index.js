// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {data, onClickIcon} = props
  const {suggestion} = data
  const handleClick = () => {
    onClickIcon(suggestion)
  }

  return (
    <li className="item">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={handleClick}
      />
    </li>
  )
}

export default SuggestionItem
