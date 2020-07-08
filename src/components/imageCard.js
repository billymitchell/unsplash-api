import React from 'react';

class ImageCard extends React.Component {
  render() {
    //destructor to refer to image properties without this.props.image
    const { alt_description, urls } = this.props.image;
    return (
      <div className="img-container">
        <img
          className="fluid"
          ref={this.imageRef}
          alt={alt_description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
