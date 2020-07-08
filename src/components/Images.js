import './imageList.css';
import React from 'react';
import ImageCard from './imageCard';
import Masonry from 'react-masonry-css';

const ImageList = (props) => {
  //pass down the images from app.js as props
  //map over them
  //assign the results to a variable called images
  const images = props.images.map((image) => {
    //use imageCard component, pass down image object prop
    return <ImageCard key={image.id} image={image} />;
  });
  // return images variable
  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images}
    </Masonry>
  );
};

export default ImageList;
