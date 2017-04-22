import React from 'react';
import Card from '../../src/components/card/card';
import {shallow} from 'enzyme';
import {expect} from 'chai';

let userToBeTested = {
  name: "Leanne",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
 website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
};

let users = [{
  id: 2,
  name: "Ervin Howell",
  username: "Antonette",
  email: "Shanna@melissa.tv",
  address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
  geo: {
    lat: "-43.9509",
    lng: "-34.4618"
  }
  },
  phone: "010-692-6593 x09125",
  website: "anastasia.net",
  company: {
    name: "Deckow-Crist",
    catchPhrase: "Proactive didactic contingency",
    bs: "synergize scalable supply-chains"
  }
},
{
  id: 3,
  name: "Clementine Bauch",
  username: "Samantha",
  email: "Nathan@yesenia.net",
  address: {
  street: "Douglas Extension",
  suite: "Suite 847",
  city: "McKenziehaven",
  zipcode: "59590-4157",
  geo: {
    lat: "-68.6102",
    lng: "-47.0653"
  }
  },
  phone: "1-463-123-4447",
  website: "ramiro.info",
  company: {
    name: "Romaguera-Jacobson",
    catchPhrase: "Face to face bifurcated interface",
    bs: "e-enable strategic applications"
  }
},
{
  id: 4,
  name: "Patricia Lebsack",
  username: "Karianne",
  email: "Julianne.OConner@kory.org",
  address: {
  street: "Hoeger Mall",
  suite: "Apt. 692",
  city: "South Elvis",
  zipcode: "53919-4257",
  geo: {
    lat: "29.4572",
    lng: "-164.2990"
  }
  },
  phone: "493-170-9623 x156",
  website: "kale.biz",
  company: {
    name: "Robel-Corkery",
    catchPhrase: "Multi-tiered zero tolerance productivity",
    bs: "transition cutting-edge web services"
  }
}];

describe('Card Component Without Mock', () => {

  it('Card Component should exist',()=>{
    const wrapper = shallow(<Card {...userToBeTested}/>);
    expect(wrapper.find('.card')).to.have.length(1);
  });

  it('Card Component should have name',()=>{
    const wrapper = shallow(<Card {...userToBeTested}/>);
    expect(wrapper.find('.name').text()).to.equal(`User name : ${userToBeTested.name}`);
  });

  it('Card Component should have email',()=>{
    const wrapper = shallow(<Card {...userToBeTested}/>);
    expect(wrapper.find('.email').text()).to.equal(`User email : ${userToBeTested.email}`);
  });

  it('Initiallly Nearest users should not be present',()=>{
    const wrapper = shallow(<Card {...userToBeTested}/>);
    expect(wrapper.find('.nearestUsers').children()).to.have.length(0);
  });

  it('Card Component should have website when clicked on the card',()=>{
    const wrapper = shallow(<Card {...userToBeTested} cards={users}/>);
     wrapper.find('.card').simulate('click');
    expect(wrapper.find('.website').text()).to.equal(`Website : ${userToBeTested.website}`);
  });

  it('Card Component should have address when clicked on the card',()=>{
    const wrapper = shallow(<Card {...userToBeTested} cards={users}/>);
     wrapper.find('.card').simulate('click');
     const {suite,street,city,zipcode} = userToBeTested.address;
      const address = `Address : ${suite},${street},${city},${zipcode}`;
      expect(wrapper.find('.address').text()).to.equal(address);
  });

  it('Nearest users should be equal to 3 when clicked on the card',()=>{
    const wrapper = shallow(<Card {...userToBeTested} cards={users}/>);
     wrapper.find('.card').simulate('click');
    expect(wrapper.find('.nearestUsers').children()).to.have.length(3);
  });

});