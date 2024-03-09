// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {productDetails, responseProductDetails} = props
  const renderproductDetails = () => (
    <ul className="RepositoryItem_container">
      {productDetails.map(eachItem => (
        <li className="listContainer" key={eachItem.id}>
          <img className="image" src={eachItem.avatarUrl} alt={eachItem.name} />
          <h1 className="heading">{eachItem.name}</h1>
          <div className="itemscontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
              alt="stars"
              className="image2"
            />
            <p className="para2">{eachItem.starsCount}</p>
          </div>
          <div className="itemscontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
              alt="forks"
              className="image2"
            />
            <p className="para2">{eachItem.forksCount}</p>
          </div>
          <div className="itemscontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
              alt="open issues"
              className="image2"
            />
            <p className="para2">{eachItem.issuesCount}</p>
          </div>
        </li>
      ))}
    </ul>
  )
  const renderfailure = () => (
    <div className="failure_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure_image"
      />
      <p className="failure_para">Something Went Wrong</p>
    </div>
  )

  switch (responseProductDetails) {
    case 'Success':
      return renderproductDetails()
    case 'failure':
      return renderfailure()
  }
}

export default RepositoryItem
