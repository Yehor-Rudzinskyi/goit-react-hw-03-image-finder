import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const key = '19986935-c30e8a30fe3b8a8494dfefb1a';

const fetchPictures = (queryForm = '', page = 1) => {
  return axios
    .get(
      `/?q=${queryForm}&page=${page}&image_type=photo&key=${key}&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data);
};

export default fetchPictures;
