const url_backend = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://devsoutinhoflix.herokuapp.com'; // 'http://localhost:8080';

export default {
  url_backend,
};
