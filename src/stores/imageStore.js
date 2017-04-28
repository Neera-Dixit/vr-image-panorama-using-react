import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/index';
import $ from 'jquery';
import config from '../util/config';

class ImageStore extends EventEmitter {
 
  constructor(){
    super();
    this.images=[];
  }

  getImages = () => {
    return this.images;
  }

  fetchImagesFromApi = () => {
      $.get(config.getImagesURL,(data)=>{
          if(data){
              this.images = data;
              this.emit('imagesFetched');
          }
      })
  }
  
  imageStoreListener = (actionObj) => {
    switch(actionObj.actionType){
            
            case 'FETCHIMAGES' : {
                      this.fetchImagesFromApi();
                       break;
                    }

       }
  }

}

let imageStore=new ImageStore();
Dispatcher.register(imageStore.imageStoreListener);
export default imageStore;