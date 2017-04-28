import React, {Component} from 'react';
import {Entity, Scene} from 'aframe-react';
import 'aframe';
import imageCss from '../../public/css/imageStyle';

export default class ImagePanaroma extends Component {
    constructor() {
        super();
    }


    render() {
        
        const {imgSrc} = this.props;
        
        return (


                <Scene>
                    <Entity primitive='a-sky' src={imgSrc} position="2 0 -3"/>
                </Scene>
        );
    }
}
