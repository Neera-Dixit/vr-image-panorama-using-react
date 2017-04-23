import React, {Component} from 'react';
import commentCss from '../../../public/css/comment.css';

export default class ViewComment extends Component {
    constructor() {
        super();
        this.state={ votes : 0};
    }
    
    handleUpvoteClick = () =>{
            let votes = this.state.votes;
            votes++;
            this.setState({votes});
    }   

    handleDownvoteClick = () =>{
        if(this.state.votes){
            let votes = this.state.votes;
            votes--;
            this.setState({votes});
        }
    }
    
    render() {
        
        const {userName,comment} = this.props;

        return (
            <div className="comment" style={this.props.style}>
                {this.props.replyTo && <b>@{this.props.replyTo}</b>}
                <div>
                    <label><b>User</b>  <div className = "nameSection">{userName}</div></label>
                </div>
                <div>
                    <label><b>Comment</b> <div className = "commentContentSection">{comment}</div></label>
                </div>
                <div><label><b>Votes</b> <div className = "upvoteContentSection">{this.state.votes} </div></label></div>
                <div className="btn">
                    <div onClick={this.handleUpvoteClick} className = "upvoteImage"></div>
                    <div onClick={this.handleDownvoteClick} className = "downvoteImage"></div>
                    <button onClick={()=>{return this.props.handelReplyComment(this.props)}}>Reply</button>
                </div>
            </div>

        )
        
        
    }

}
