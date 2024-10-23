import React from 'react'
import './Overview.css'
import { Link } from 'react-router-dom'
function Template_Card({...props}) {
  return (
    <div>
          <figure className="card">
    <div className="card__emoji">{props.image}</div>
    <div className="card__title-box">
      <h2 className="card__title">{props.name}</h2>
    </div>

    <div className="card__details">
      {props.organic && <div className="card__detail-box {%NOT_ORGANIC%}">
          <h6 className="card__detail card__detail--organic">Organic!</h6>
      </div>}

      <div className="card__detail-box">
        <h6 className="card__detail"> {props.quantity} per 📦</h6>
      </div>
        
      <div className="card__detail-box">
        <h6 className="card__detail card__detail--price">€{props.price}</h6>
      </div>
    </div>

    <Link className="card__link" to={`/product?id=${props.id}`}>
      <span>Detail <i className="emoji-right">👉</i></span>
    </Link>
  </figure>
    </div>
  )
}

export default Template_Card