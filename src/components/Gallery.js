import { useState } from 'react';
import PropTypes from 'prop-types'


const Gallery = (props) => {
  const [imgNo, setImgNo] = useState(1)
  console.log(props.images)
  const images = require.context('../images', true);
  let loadImage = imageName => (images(`./${props.images.toLowerCase()}/${imageName}`).default);

  const onClick = () => {
    if (imgNo === 1){
      document.getElementById("galleryImg").src = loadImage("2.png")
      setImgNo(2)
    }
    if (imgNo === 2){
      document.getElementById("galleryImg").src = loadImage("1.png")
      setImgNo(1)
    }
  }

  return (
    <div>
    <section>
      <h2>Gallery</h2>
      <section id="gallery">
        <button className="btn" onClick={onClick}>{'\u276E'}</button>
        <img id="galleryImg" src={loadImage("1.png")} alt="Gallery" />
        <button className="btn" onClick={onClick}>{'\u276F'}</button>
      </section>
    </section>
    </div>
  )
}

Gallery.defaultProps = {
  images: ""
}

Gallery.propTypes = {
  images: PropTypes.string
}

export default Gallery
