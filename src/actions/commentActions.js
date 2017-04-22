import Dispatcher from '../dispatcher/index';

let commentActions = {

	postComments : ()=>{
		Dispatcher.dispatch({
			actionType : 'POSTCOMMENTS'
		});

	}
    
    
}

export default cardActions;