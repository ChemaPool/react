import React from 'react';

const PhotoContext = React.createContext({
  image_technics: {
    src: "http://lorempixel.com/400/200/technics"
  },
  image_nature: {
    src: "http://lorempixel.com/400/200/nature"
  },
  image_transport: {
    src: "http://lorempixel.com/400/200/transport"
  }
});

export default PhotoContext;