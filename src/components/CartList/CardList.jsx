import './CardList.css';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'akar-icons';
import { useDispatch, useSelector } from 'react-redux';
import { get_cities, filter_cities } from '../../store/acitions/citiesActions';
import Card from '../Card/Card';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const CardList = () => {
  const cities = useSelector((store) => store.citiesReducer.cities);

  const dispatch = useDispatch();

  const inputSearch = useRef('');

  useEffect(() => {
    dispatch(get_cities());
  },
    [dispatch]
  );

  const handleSearch = () => {
    dispatch(filter_cities({
      name: inputSearch.current.value
    }));
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <>
      <section className='filtter'>
        <div className='search'>
          <input ref={inputSearch} onKeyPress={handleKeyPress} className='input-search' type="text" placeholder='Search City' />
          <button onClick={handleSearch} className='search-icon'>
            <Search strokeWidth={2} size={25} />Search
          </button>
        </div>
      </section>
      <section className='card-list'>
        {cities.length > 0 ?
          cities?.map((img) => (
            <Link className='link' key={img._id} to={'/cities/' + img._id}>
              <Card _id={img._id} name={img.name} country={img.country} image={img.image} currency={img.currency} />
            </Link>
          )) :
          (<ErrorMessage message={'No cities found'} />)
        }
      </section>
    </>
  )
}

export default CardList;
