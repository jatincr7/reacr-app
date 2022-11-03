import React from "react";
import Comment from "./Comment";

// let comments = [];
class TweetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      comments: [],
      displayComment: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleChange(event) {
   
    this.setState({
      comment: event.target.value,
    });

  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
        comment : '',
        comments: [...this.state.comments, this.state.comment],
        displayComment: true,
    });
  
  }

  render() {
    let container = [];
    let length = this.state.comments.length;
    for(let i = 0; i < length; i++){
        container.push(
            <Comment key={i} comments={this.state.comments[i]}/>
        )
    }
    return (
      <React.Fragment>
        <h2><b>{this.props.status}</b></h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-success" >Post</button>
        </form>
        {this.state.displayComment ? container : null}
      </React.Fragment>
    );
  }
}

export default TweetContainer;