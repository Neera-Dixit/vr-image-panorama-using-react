import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ViewComment from '../viewComment';
import PostComment from '../postComment';

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
                        commentList : []
                     };
        this.position =0;
    }

    handelReplyComment = ()=>{
      const commentList = this.state.commentList;
    
        //check if post comment is already opened
        if(commentList.length === 0 || commentList[commentList.length-1].type.name !== "PostComment"){
            this.position+=20;
            commentList.push(<PostComment style={{left: this.position}} key={this.state.commentList.length+1} handlePostComment={this.handlePostComment}/>);
        }

      this.setState({commentList});
    }
    
    handlePostComment = (userName,comment) => {
       const commentList = this.state.commentList;
        commentList.pop();
        commentList.push(<ViewComment style={{left: this.position  }} key={this.state.commentList.length+1} userName={userName} comment={comment} handelReplyComment={this.handelReplyComment}/>);
       this.setState({commentList});
    }
    
    
    render() {
        
        const {userName,comment} = this.props;
        
        return (
            
            <div className="parent" >
                <ViewComment userName={userName} comment={comment} handelReplyComment={this.handelReplyComment}/>
                {this.state.commentList}
            
            </div>
        )
    }
}
