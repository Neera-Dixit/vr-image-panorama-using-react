import Dispatcher from '../dispatcher/index';

let imageActions = {

	fetchImages : ()=>{
		Dispatcher.dispatch({
			actionType : 'FETCHIMAGES'
		});

	}
    
}

export default imageActions;