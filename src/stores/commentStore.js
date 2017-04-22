import config from '../util/config';
import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/index';

/*
Card Store which listensfor actions dispatched 
from dispacther , is responsible for making ajax service call to fetch
 cards
*/
class CardStore extends EventEmitter {
 
  constructor(){
    super();
    this.cards=[];
  }

  fetchCardsFromAPI(){
    AjaxService.get(config.getCardsURL)
    .then((data)=>{
      this.jobs=data;
      this.emit('cardsFetched');
    })
    .catch((err)=>{
      console.log(err);
    });
  }


  getCards(){
  	return this.jobs;
  }

  // cardStoreListener which listens for actions related to cards
  cardStoreListener(actionObj){
    switch(actionObj.actionType){

            case 'FETCHCARDS' : {
                                  this.fetchCardsFromAPI();
                                   break;
                                }

       }
  }

}

let cardStore=new CardStore();
Dispatcher.register(cardStore.cardStoreListener.bind(cardStore));
export default cardStore;