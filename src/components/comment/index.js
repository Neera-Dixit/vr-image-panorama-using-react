import React, {Component} from 'react';
import PostComment from './postComment';
import CommentList from './commentList/index';
import commentStore from '../../stores/commentStore';
import commentActions from '../../actions/commentActions';

export default class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments : []
        }
    }

    componentWillMount= () => {
        commentStore.on('commentsFetched', this.fetchCommentsFromStore);
    }
    
    componentWillUnmount= () => {
        commentStore.removeEventListener('commentsFetched', this.fetchCommentsFromStore);
    }
    
    fetchCommentsFromStore = () => {
        this.setState({comments:commentStore.getComments()});
    }
        
    handlePostComment = (userName,comment) => {
        commentActions.postComment({userName,comment});
       // const comments= this.state.comments;
       // comments.push({userName,comment});
        //this.setState({comments});
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