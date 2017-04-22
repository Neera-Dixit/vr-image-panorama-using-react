import React, {Component} from 'react';
import Comment from './comment';

export default class ViewComments extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        
        const comments = this.props.comments.map((commentData,index)=>{
          const {userName,comment}=commentData;
         return <Comment key={index} userName={userName} comment={comment} />;   
        });
        
        return (
           
            <div>
                {comments}
            </div>
        )
    }
}
