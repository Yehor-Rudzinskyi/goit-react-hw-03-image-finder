import ImageGalleryItem from '../ImageGalleryItem';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  imageGallery: {
    display: 'grid',
    maxWidth: 'calc(100vw - 48px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gridGap: '16px',
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    listStyle: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const ImageGallery = ({ pictures, onClickPicture }) => {
  const classes = useStyles();
  return (
    <ul className={classes.imageGallery}>
      {pictures.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          picture={webformatURL}
          bigOne={largeImageURL}
          onClickPicture={onClickPicture}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onClickPicture: PropTypes.func.isRequired,
};

export default ImageGallery;
