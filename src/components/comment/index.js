import React, {Component} from 'react';
import PostComment from './postComment';
import CommentList from './commentList/index';

export default class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments : []
        }
    }

    handlePostComment = (userName,comment) => {
        const comments= this.state.comments;
        comments.push({userName,comment});
        this.setState({comments});
    }

    render() {
        return (
            <div>
                <PostComment handlePostComment={this.handlePostComment}/>
                <hr/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}