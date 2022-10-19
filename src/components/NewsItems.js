import moment from 'moment/moment'
import React, { Component } from 'react'


export default class NewsItems extends Component {
  render() {
    let {title, description ,imageUrl ,newsUrl ,date} = this.props
    let formartedDate =moment(date).format("MMMM Do YYYY, h:mm:ss a")
    return (
      <div className='container my-3'>
        <div className="card">
          <img src={imageUrl?imageUrl:"https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title?title:"title is not available"}</h5>
              <p className="card-text">{description?description:"for more details click on read me button bellow"}</p>
              <p className="card-text">{`PublishedAt- ${formartedDate}`}</p>

              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}
