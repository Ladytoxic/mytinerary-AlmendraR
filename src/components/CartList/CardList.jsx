import './CardList.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import useAxiosHook from '../../Hooks/useAxiosHook';

const CardList = () => {
  const [cities, setCities] = useState();

  const { data, error } = useAxiosHook({ URL_API: '/dataApi.json' });

  useEffect(() => {
    if (data) {
      setCities(data);
    }
  }, [data]);

  if (error) {
    return <p>Hubo un error: {error.message}</p>;
  }

  return (
    <section className='card-list'>
      {(cities?.map((img) => (
        <Link className='link' key={img._id} to={'/cities/' + img._id}>
          <Card _id={img._id} name={img.name} country={img.country} image={img.image} />
        </Link>
      )))}
    </section>
  )
}

export default CardList
