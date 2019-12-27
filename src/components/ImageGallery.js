import { React, useContext } from 'react';
import Image from './ImageContainer';

const photos = {
  image_technics: {
    src: "http://lorempixel.com/400/200/technics"
  },
  image_nature: {
    src: "http://lorempixel.com/400/200/nature"
  },
  image_transport: {
    src: "http://lorempixel.com/400/200/transport"
  }
};

const PhotoContext = React.createContext(photos);

const Gallery = () => {
  const photo = useContext(PhotoContext);

  return (
    <div>
      <Image src = { photo.image_technics.src } />
      <Image src = { photo.image_nature.src } />
      <Image src = { photo.image_transport.src } />
    </div>
  );
}

export default Gallery;