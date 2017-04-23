import React, {Component} from 'react';
import postCommentCss from '../../../public/css/comment.css';

export default class PostComment extends Component {
    constructor(props) {
        super(props);
        this.handlePostComment = this.handlePostComment.bind(this);
    }

    handlePostComment = (e) => {
        e.preventDefault();
        this.props.handlePostComment(this.userName.value,this.comment.value);
        this.userName.value ='';
        this.comment.value = '';
    }

    render() {
        return (
            <form onSubmit={this.handlePostComment} className="comment" style={this.props.style}>
                <div>
                    <label><b>User</b></label>
                    <input type="text" size="20" ref={(input) => this.userName = input} required/>
                </div>
                <div>
                    <label className="commentLabel"><b>Comment</b></label>
                    <textarea ref={(input) => this.comment = input} required></textarea>
                </div>
                <div><button id="postComment">Submit Comment</button></div>
            </form>

        )
    }
}
