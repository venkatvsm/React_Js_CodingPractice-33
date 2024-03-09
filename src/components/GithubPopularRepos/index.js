import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    productDetails: [],
    activeFilterId: languageFiltersData[0].id,
    isLoading: true,
    responseProductDetails: '',
  }

  componentDidMount() {
    this.getProductDetails()
  }

  getProductDetails = async () => {
    this.setState({isLoading: true})
    const {activeFilterId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeFilterId}`

    const response = await fetch(url)
    const data = await response.json()
    const updatedProductDetails = data.popular_repos.map(eachItem => ({
      avatarUrl: eachItem.avatar_url,
      forksCount: eachItem.forks_count,
      id: eachItem.id,
      issuesCount: eachItem.issues_count,
      name: eachItem.name,
      starsCount: eachItem.stars_count,
    }))
    if (response.ok === true) {
      this.setState({
        productDetails: updatedProductDetails,
        isLoading: false,
        responseProductDetails: 'Success',
      })
    } else {
      console.log(response)
      this.setState({responseProductDetails: 'failure'})
    }
  }

  onChangeActiveLanguageFiltersData = id => {
    this.setState({activeFilterId: id}, this.getProductDetails)
  }

  render() {
    const {activeFilterId, productDetails, isLoading, responseProductDetails} =
      this.state
    return (
      <div className="bg_container">
        <h1 className="GithubPopularRepos_heading">Popular</h1>
        <LanguageFilterItem
          languageFiltersData={languageFiltersData}
          onChangeActiveLanguageFiltersData={
            this.onChangeActiveLanguageFiltersData
          }
          activeFilterId={activeFilterId}
        />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <RepositoryItem
            productDetails={productDetails}
            responseProductDetails={responseProductDetails}
          />
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
