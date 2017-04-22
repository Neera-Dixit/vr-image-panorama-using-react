import Dispatcher from '../dispatcher/index';

let commentActions = {

	postComment : (comment)=>{
		Dispatcher.dispatch({
			actionType : 'ADDCOMMENTS',
            comment
		});

	},
    
    postReplies : (comment)=>{
        Dispatcher.dispatch({
            actionType : 'ADDREPLIES',
            comment
        });

    }
    
}

export default commentActions;