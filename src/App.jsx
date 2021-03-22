import { useState, useEffect } from 'react';
import Section from './components/Section';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import fetchPictures from './services/pictures-api';
import Button from './components/Button';
import Loading from './components/Loader';
import Modal from './components/Modal/Modal';

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [queryForm, setQueryForm] = useState('');
  const [loading, setLoading] = useState(false);
  const [bigPicture, setBigPicture] = useState('');
  const [totalHits, setTotalHits] = useState(1);

  useEffect(() => {
    if (bigPicture) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bigPicture]);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      setBigPicture('');
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [page]);

  useEffect(() => {
    if (queryForm.trim()) fetchInApp();
  }, [queryForm]);

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      setBigPicture('');
    }
  };

  const handleSubmitForm = value => {
    setQueryForm(value);
    setPage(1);
    setPictures([]);
  };

  const fetchInApp = () => {
    setLoading(true);
    fetchPictures(queryForm, page)
      .then(({ hits, totalHits }) => {
        setTotalHits(totalHits);
        setPictures(prev => [...prev, ...hits]);
        setPage(prevState => prevState + 1);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleOnButtonClick = () => {
    fetchInApp();
  };

  const handleOnBigPicture = bigOne => {
    setBigPicture(bigOne);
  };
  return (
    <Section>
      <Searchbar onSubmit={handleSubmitForm} />
      {!totalHits && (
        <h1 style={{ color: 'red', textAlign: 'center' }}>
          Try another hand...
        </h1>
      )}
      <ImageGallery pictures={pictures} onClickPicture={handleOnBigPicture} />
      {loading && <Loading />}
      {pictures.length > 11 && !loading && (
        <Button onClick={handleOnButtonClick} />
      )}
      {bigPicture && (
        <Modal bigPicture={bigPicture} onClickBackdrop={handleBackdrop} />
      )}
    </Section>
  );
};

export default App;
