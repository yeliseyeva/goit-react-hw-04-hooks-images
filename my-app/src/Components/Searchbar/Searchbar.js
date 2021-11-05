import {useState} from 'react';
import PropTypes from 'prop-types';
import {toast } from 'react-toastify';

function Searchbar ({handleSubmit}) {

    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.currentTarget.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if (query === "") {
            toast.error(`Введите название картинки`)
        }
    
        handleSubmit(query);

        setQuery('');
    };
    

    return (
        <header className="Searchbar">
            <form 
            className="SearchForm"
            onSubmit={submit}>
                <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                name="query"
                value={query}
                onChange={handleChange}
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}

Searchbar.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default Searchbar;