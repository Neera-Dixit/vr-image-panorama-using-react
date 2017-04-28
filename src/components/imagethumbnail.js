import React, {Component} from 'react';
import imageCss from '../../public/css/imageStyle';

export default class ImageThumbnail extends Component {
    constructor() {
        super();
        this.state = {
            images : []
        }
    }

    handleImageClick = () => {
        this.props.handleImageClick(this);
    }
    
    render() {
        
        const {imgData} = this.props;
        
        return (

           <div className="image">
                <div className="imageLabel"><label>{imgData.name}</label></div>
                <div className="imageWrapper">
                    <img src={imgData.pano} alt="image" onClick={this.handleImageClick} />
                </div>
            </div>
        );
    }
}