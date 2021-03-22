import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyle = createUseStyles({
  imageGalleryItem: {
    borderRadius: '2px',
    boxShadow: `0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)`,
  },

  imageGalleryItemImage: {
    width: '100%',
    height: '260px',
    objectFit: 'cover',
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'scale(1.03)',
      cursor: ' zoom-in',
    },
  },
});

const ImageGalleryItem = ({ picture, bigOne, onClickPicture }) => {
  const classes = useStyle();

  return (
    <li
      className={classes.imageGalleryItem}
      onClick={() => onClickPicture(bigOne)}
    >
      <img src={picture} alt="" className={classes.imageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  picture: PropTypes.string,
  onClickPicture: PropTypes.func,
  bigOne: PropTypes.string,
};

export default ImageGalleryItem;
