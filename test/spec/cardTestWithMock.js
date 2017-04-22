import React from 'react';
import Card from '../../src/components/card/index';
import {shallow,mount} from 'enzyme';
import {expect} from 'chai';
import jsdom from 'jsdom';
import mockData from '../../mocks/card-mocks.json';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc;
global.window = doc.defaultView;

describe('CardComponent With Mock', () => {
          
  it('Check if all the cards are render properly',()=>{
    const wrapper = mount(<Card/>);
    wrapper.setState({cards : mockData});
    expect(wrapper.find('.card')).to.have.length(mockData.length);
  });

  it('Check if all the cards have name',()=>{
    const wrapper = mount(<Card/>);
    wrapper.setState({cards : mockData});
    expect(wrapper.find('.name')).to.have.length(mockData.length);
  });

  it('Check if all the cards have email',()=>{
    const wrapper = mount(<Card/>);
    wrapper.setState({cards : mockData});
    expect(wrapper.find('.email')).to.have.length(mockData.length);
  });

});