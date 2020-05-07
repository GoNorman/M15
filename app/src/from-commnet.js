import React, { Component } from "react";
import Form from "./form.js";
import ShowComment from "./showcomment";

class FromBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: this.getInitialState(),
      newName: "",
      newText: "",
    };
    this.onSubmitComment = this.onSubmitComment.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onDeleteComment = this.onDeleteComment.bind(this);
  }

  onChangeName(ev) {
    this.setState({ newName: ev.target.value });
  }
  onChangeText(ev) {
    this.setState({ newText: ev.target.value });
  }
  onDeleteComment(id) {
    this.setState(ev => {
      const comment = ev.comment.filter((item, j) => id !== j)
      return {comment}
    })
    let array = JSON.parse(localStorage.getItem('comment')) 
    console.log(array.splice(id, 1));
    localStorage.setItem("comment", JSON.stringify(array));
  }

  onSubmitComment(ev) {
    ev.preventDefault();
    const comment = this.state.comment;
    let newName = this.state.newName;
    let newText = this.state.newText;
    if(newName === "" || newText === ""){
      alert("Name or comment field is not filled");
    } else {
      comment.push({ newName, newText });
      this.setState({
        comment,
        newName: "",
        newText: "",
      });
      localStorage.setItem("comment", JSON.stringify(comment)); 
    }
  }

  getInitialState(){
    const comment = localStorage.getItem('comment')
    if(comment){
      return JSON.parse(comment)
    } else {
      localStorage.setItem('comment', JSON.stringify([]))
      return[]
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <Form
          onChangeName={this.onChangeName}
          onChangeText={this.onChangeText}
          onSubmitComment={this.onSubmitComment}
          newName={this.state.newName}
          newText={this.state.newText}
        />
        <ShowComment
          comment={this.state.comment}
          onDeleteComment={this.onDeleteComment}
        />
      </React.Fragment>
    );
  }
}

export default FromBlock;