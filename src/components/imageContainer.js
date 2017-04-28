import React, {Component} from 'react';
import imageActions from '../actions/imageActions';
import imageStore from '../stores/imageStore';
import ImagePanaroma from './imagePanaroma';
import ImageThumbnail from './imagethumbnail';

export default class ImageContainer extends Component {
    constructor() {
        super();
        this.state = {
            images : [],
            panaromaImage : "",
            showUserlabel : true
        }
        
        imageActions.fetchImages();
    }

    componentWillMount= () => {
        imageStore.on('imagesFetched', this.fetchImagesFromStore);
    }
    
    componentWillUnmount= () => {
        imageStore.removeEventListener('imagesFetched', this.fetchImagesFromStore);
    }
    
    fetchImagesFromStore = () => {
       const imagesData =  imageStore.getImages().map((image,index)=>{
           image.key = index;
           return image;
        })
        this.setState({images:imagesData});
    }

    showPanaroma = (imageData) => {
        this.setState({panaromaImage : this.state.images[imageData.props.imgData.key].pano,showUserlabel:false});
    }
    
    render() {
        
        const {images,panaromaImage,showUserlabel} = this.state;
        const thumbnails = this.state.images.map((image,index)=>{
                return <ImageThumbnail handleImageClick={this.showPanaroma} key={index} imgData={image} /> 
            });
        
        const bannerLabel = showUserlabel?'Select the below Thumbnails to view 360 degree panaroma View!'
                    :`360 Degree Panaroma View!`;
        return (
        
            <div id="rootComponent">
                <div className="bannerLabel"><label>{bannerLabel}</label></div>
                <ImagePanaroma imgSrc = {panaromaImage} />
                <div id="thumbnails">
                 {thumbnails}
                </div>
            </div>
           
        );
    }
}