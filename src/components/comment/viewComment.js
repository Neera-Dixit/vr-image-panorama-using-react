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
                    <label><b>User</b> : {userName}</label>
                </div>
                <div>
                    <label><b>Comment</b> : {comment}</label>
                </div>
                <div><label><b>Votes</b> : {this.state.votes}</label></div>
                <div className="btn">
                    <button onClick={this.handleUpvoteClick}>Upvote</button>
                    <button onClick={this.handleDownvoteClick}>DownVote</button >
                    <button onClick={()=>this.props.handelReplyComment(this.props)}>Reply</button>
                </div>
            </div>

        )
        
        
    }

}
