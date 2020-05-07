import React, { Component } from 'react';

class Form extends Component {
    render(){
        return (
          <div className="form-comment">
            <form onSubmit={this.props.onSubmitComment}>
              <input
                className="form-input"
                value={this.props.newName}
                onChange={this.props.onChangeName}
                placeholder="Enter the name"
              />
              <textarea
                className="form-text"
                value={this.props.newText}
                onChange={this.props.onChangeText}
                placeholder="Enter the comment"
              ></textarea>
              <button className="btn-ok" type="submit">
                OK
              </button>
            </form>
          </div>
        );
    }
}

export default Form;