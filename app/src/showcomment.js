import React, { Component } from "react";
import Date from './date.js';

class ShowComment extends Component{
  render(){
        return (
          <div className="show">
            {this.props.comment.map((ev, index) => {
              return (
                <div key={index} className="showcommnet">
                  <div className="name">
                    <label>Name  :  </label>
                  </div>
                  <div className="user-name">
                    <p>  {ev.newName}</p>
                  </div>
                  <Date />
                  <div className="comment-user">{ev.newText}</div>
                  <button
                    className="btnDelete"
                    type="button"
                    onClick={() => this.props.onDeleteComment(index)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        );
    }
}

export default ShowComment;