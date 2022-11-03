import React from "react";
import LikeButton from "./LikeButton";
import Timer from "./Timer";

class Comment extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div><Timer/> <b>{this.props.comments}</b> <LikeButton/></div>
        );
    }
}
export default Comment