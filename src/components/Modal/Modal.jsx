import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },

  modal: {
    maxWidth: 680,
    maxHeight: 440,
  },
});

const Modal = ({ bigPicture, onClickBackdrop }) => {
  const classes = useStyles();
  return (
    <div className={classes.overlay} onClick={onClickBackdrop}>
      <div className={classes.modal}>
        <img src={bigPicture} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  bigPicture: PropTypes.string,
  onClickBackdrop: PropTypes.func,
};

export default Modal;
