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
                <div>
                    <label>User :{userName}</label>
                </div>
                <div>
                    <label>Comment : {comment}</label>
                </div>
                <div><label>Votes : {this.state.votes}</label></div>
                <div>
                    <button onClick={this.handleUpvoteClick}>Upvote</button>
                    <button onClick={this.handleDownvoteClick}>DownVote</button >
                    <button onClick={()=>this.props.handelReplyComment()}>Reply</button>
                </div>
            </div>

        )
        
        
    }

}
