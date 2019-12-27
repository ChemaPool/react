import React, { useContext } from 'react';
import Image from './ImageContainer';
import PhotoContext from './usePhotoContext';

const Gallery = () => {
  const photo = useContext(PhotoContext);

  return (
    <div>
      <Image src = { photo.image_technics.src } />
      <Image src = { photo.image_nature.src } />
      <Image src = { photo.image_transport.src } />
    </div>
  )
}

export default Gallery;