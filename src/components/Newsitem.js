import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let {title,description,imgurl,newsurl,author,date}=this.props;
    return (
        <div className="card card border-dark mb-3 my-3" style={{width : 19+"rem"}}>
            <img src={imgurl?imgurl:"https://res.cloudinary.com/coneaholic/image/upload/v1679751929/react/news_fvzkm7.jpg"} className="card-img-top"  style={{height : 10+"rem"}} alt="..."/>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">By {author?author:'Unknown'}</li>
              </ul>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{date?'At ' + date.slice(11,19):''} {date?'On ' + date.slice(0,10):'Recently'}</li>
              </ul>
              <div className="card-body">
                <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
              </div>
        </div>
    
    )
  }
}

export default Newsitem
// target = blank is used to change the tab