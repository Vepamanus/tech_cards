import './index.css'

const TechCards = props => {
  const {cards} = props
  const {title, description, imgUrl, className} = cards

  return (
    <li className={`ds-card ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="image">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default TechCards
