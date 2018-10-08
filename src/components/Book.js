import React, { Component } from 'react'

export default class Book extends Component {
  changeShelf = (e) => {
    this.props.onShelfChange(e.target.value)
  }

  render(){
    const imageURL = this.props.imageURL.thumbnail || this.props.imageURL.smallThumbnail
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${imageURL}")`
              }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.changeShelf} value={this.props.shelf ? this.props.shelf : 'None'}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="None">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{`${this.props.title}`}</div>
          {this.props.author && this.props.author.map((author,index)=>(
            <div
              className="book-authors"
              key={index}
            >{`${author}`}</div>
          ))}
        </div>
      </li>
    )
  }
}