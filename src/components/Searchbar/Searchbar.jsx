import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  searchbar: {
    top: 0,
    left: 0,
    position: 'sticky',
    zIndex: 1100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '64px',
    paddingRight: '24px',
    paddingLeft: '24px',
    paddingTop: '12px',
    paddingBottom: '12px',
    color: '#fff',
    backgroundColor: '#3f51b5',
    boxShadow: `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
  },
  searchForm: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#fff',
    borderRadius: '3px',
    overflow: 'hidden',
  },

  searchFormButton: {
    display: 'inline-block',
    width: '48px',
    height: '48px',
    border: 0,
    backgroundImage: `url('https://image.flaticon.com/icons/svg/149/149852.svg')`,
    backgroundSize: '40%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.6,
    transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    outline: 'none',
    ' &:hover': {
      opacity: 1,
    },
  },

  searchFormButtonLabel: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    clipPath: ' inset(50%)',
    border: 0,
  },

  searchFormInput: {
    display: 'inline-block',
    width: '100%',
    font: 'inherit',
    fontSize: '20px',
    border: 'none',
    outline: 'none',
    paddingLeft: '4px',
    paddingRight: '4px',
    '&::placeholder': {
      font: 'inherit',
      fontSize: '18px',
    },
  },
});

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');
  const classes = useStyles();

  const handleOnChangeInput = e => {
    setSearch(e.target.value);
  };

  const handleOnSubmitForm = e => {
    e.preventDefault();
    if (search) {
      onSubmit(search);
      setSearch('');
    }
  };
  return (
    <header className={classes.searchbar}>
      <form className={classes.searchForm} onSubmit={handleOnSubmitForm}>
        <button type="submit" className={classes.searchFormButton}>
          <span className={classes.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={classes.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={search}
          placeholder="Search images and photos"
          onChange={handleOnChangeInput}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
