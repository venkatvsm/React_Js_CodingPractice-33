// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {
    languageFiltersData,
    onChangeActiveLanguageFiltersData,
    activeFilterId,
  } = props
  const onclickchangeActiveButton = event => {
    onChangeActiveLanguageFiltersData(event.target.value)
  }
  return (
    <div className="LanguageFilterItem_container">
      {languageFiltersData.map(eachItem => (
        <button
          className={
            activeFilterId === eachItem.id
              ? 'activeLanguageFilterItem_button'
              : 'LanguageFilterItem_button'
          }
          type="button"
          value={eachItem.id}
          key={eachItem.id}
          onClick={onclickchangeActiveButton}
        >
          {eachItem.language}
        </button>
      ))}
    </div>
  )
}
export default LanguageFilterItem
