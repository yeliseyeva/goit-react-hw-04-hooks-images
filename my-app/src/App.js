import { useState, useEffect} from "react";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Loader from "./Components/Loader/Loader";
import Button from "./Components/Button/Button";
import api from "./services/apiService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App () {

  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === "") {
      return;
    }

    getPictures();

  }, [query]);

  useEffect(() => {
    if (page !== 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setError(null)
  };

  const getPictures = () => {

    setLoading(true)

    api
    .getPictures(query, page)
    .then(res => {
      setImages([...images, ...res]);
      setPage(page + 1)
    })
    .catch( () => setError(true) )
    .finally(() => setLoading(false) )

  }

  return (
    <div className="App">

      <Searchbar handleSubmit={handleSubmit}/>

      {error && toast.error(`Не нашли картинку ${query}:(`)}

      <ImageGallery images={images}/>

      {images.length > 0 && <Button loadMore={getPictures}/>}

      {loading && <Loader />}

      <ToastContainer autoClose={3000}/>

    </div>
  );
}

export default App;