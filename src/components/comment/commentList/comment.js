import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ViewComment from '../viewComment';
import PostComment from '../postComment';
import commentStore from '../../../stores/commentStore';
import commentActions from '../../../actions/commentActions';

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
                        commentList : [],
                        showPostComment : false
                     };
        this.position =0;
    }

    componentWillMount= () => {
        commentStore.on('repliesFetched', this.fetchRepliesFromStore);
    }
    
    componentWillUnmount= () => {
        commentStore.removeEventListener('repliesFetched', this.fetchRepliesFromStore);
    }
    
    fetchRepliesFromStore = () => {
        this.setState({commentList:commentStore.getReplies(this.props.parentKey)});
    }
    
    handelReplyComment = ({userName})=>{
      this.replyTo = userName;
      const commentList = this.state.commentList;
        //check if post comment is already opened
       if(!this.state.postCommentOpen){
            this.setState({showPostComment : true});
            this.postCommentOpen = !this.postCommentOpen;                       
        }
                  
      this.setState({commentList});
    }
    
    handlePostComment = (userName,comment) => {
        this.setState({showPostComment : false});
        this.postCommentOpen = !this.postCommentOpen;
        commentActions.postReplies({commentId : this.props.parentKey,replies:{userName,comment,replyTo:this.replyTo}});
    }
    
    
    render() {
        
        const {userName,comment} = this.props;
        this.position =0;
    
        const commentList = this.state.commentList && this.state.commentList.map((element,index) => {
            this.position+=20;

             return (<ViewComment style={{left: this.position}} key={index} userName={element.userName} comment={element.comment} replyTo ={element.replyTo} handelReplyComment={this.handelReplyComment}/>);                 

                                   
         });
            
        return (
            
            <div className="parent" >
                <ViewComment userName={userName} comment={comment} handelReplyComment={this.handelReplyComment}/>
                {commentList}
                {this.state.showPostComment && <PostComment style={{left: this.position+=20}} handlePostComment={this.handlePostComment} />}
                <hr/>
            </div>
        )
    }
}
