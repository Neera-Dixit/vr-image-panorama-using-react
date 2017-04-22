import config from '../util/config';
import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/index';

class CommentStore extends EventEmitter {
 
  constructor(){
    super();
    this.comments=[];
    this.replies = {};
  }

  getComments = () => {
    return this.comments;
  }
    
  getReplies = (commentId) => {
      return this.replies[commentId];
  }
  
  addReplies = ({commentId,replies}) => {
      this.replies[commentId] = !this.replies[commentId]?[]:this.replies[commentId];
      this.replies[commentId].push(replies);
       this.emit('repliesFetched');
  }
  
  addComments = (comment) => {
      this.comments.push(comment);
      this.emit('commentsFetched');
  }

  commentStoreListener = (actionObj) => {
    switch(actionObj.actionType){
            
            case 'ADDCOMMENTS' : {
                      this.addComments(actionObj.comment);
                       break;
                    }
            
            case 'ADDREPLIES':
                {
                    this.addReplies(actionObj.comment);
                    break;
                }
       }
  }

}

let commentStore=new CommentStore();
Dispatcher.register(commentStore.commentStoreListener);
export default commentStore;