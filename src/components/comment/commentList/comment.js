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
    }

    componentWillMount= () => {
        commentStore.on('repliesFetched', this.fetchRepliesFromStore);
    }
    
    componentWillUnmount= () => {
        commentStore.removeEventListener('repliesFetched', this.fetchRepliesFromStore);
    }
    
    fetchRepliesFromStore = () => {
        let replies = commentStore.getReplies(this.props.parentKey);
        let position =0,replyToPos=0,count=0;
        let commentList = replies && replies.map((commentData,index) => {
           
            let commentState = this.state.commentList;
            
            position = commentState[index]?(commentState[index].position):position+40;
            
            if(this.replyTo === commentData.replyTo){
                count++;
                if(count ==1){
                     replyToPos = position;
                }
               
            }
    
            
            return {commentData,position}
        });
        
        
       if(count >=2){
           commentList[commentList.length-1].position = replyToPos;
       } 
        this.setState({commentList});
    }
    
    handelReplyComment = ({userName,index})=>{
      this.replyTo = userName;
        //check if post comment is already opened
       if(!this.state.postCommentOpen){
            this.setState({showPostComment : true});
            this.postCommentOpen = !this.postCommentOpen;                       
        }

    }
    
    handlePostComment = (userName,comment) => {
        this.setState({showPostComment : false});
        this.postCommentOpen = !this.postCommentOpen;
        commentActions.postReplies({commentId : this.props.parentKey,replies:{userName,comment,replyTo:this.replyTo}});
    }
    
    
    render() {
        
        const {userName,comment,parentKey} = this.props;

        const commentList = this.state.commentList && this.state.commentList.map((element,index) => {
            let commentData = element.commentData;
             return (<ViewComment style={{left: element.position}} postion={element.position} key={index+1} index={index+1} userName={commentData.userName} comment={commentData.comment} replyTo ={commentData.replyTo} handelReplyComment={this.handelReplyComment}/>);                 

                                   
         });
            
        return (
            
            <div className="parent" >
                <ViewComment userName={userName} key={parentKey} index={parentKey} style={{left: 10}} postion={10} comment={comment} handelReplyComment={this.handelReplyComment}/>
                {commentList}
                {this.state.showPostComment && <PostComment style={{left: 20}} handlePostComment={this.handlePostComment} />}
                <hr/>
            </div>
        )
    }
}
