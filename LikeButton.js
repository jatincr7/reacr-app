import React from "react";

class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes : 0,
        }

        this.incrementLike = this.incrementLike.bind(this);
    }

    incrementLike(event){
        this.setState({
            likes : this.state.likes + 1,
        });    
    }

    render(){
        return(
            <>
                <button  className="btn btn-dark"  onClick={this.incrementLike}>
                Like
                </button>
                {' '}{this.state.likes} Likes
            </>
            
        );
    }
}

export default LikeButton;