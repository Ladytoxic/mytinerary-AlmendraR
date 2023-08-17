import './Carousel.css';
import { CircleChevronLeftFill, CircleChevronRightFill } from 'akar-icons';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../Hooks/useFecth';

const Carousel = () => {
  const [cities, setCities] = useState([]);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const { data } = useFetch({ URL_API: 'http://localhost:3000/cities' });

  useEffect(() => {
    if (data) {
      setCities(data.cities.slice(0, 12));
      console.log(data)
    }
  },
    [data]
  );

  const nextImage = () => {
    const remainingCities = cities.length - index;
    const step = Math.min(remainingCities, 4);


    if (step > 0) {
      setIndex(index + step);
    }
  };

  const prevImage = () => {
    const step = Math.min(index, 4);

    if (step > 0) {
      setIndex(index - step);
    }
  };

  const detaillsCity = (cityId) => {
    navigate(`/cities/${cityId}`);
  }

  return (
    <section className='carousel fade-in'>
      <h2>Popular Mytineraries</h2>
      <div className='carousel-container'>
        {cities.slice(index, index + 4).map((img) => (
          <div key={img._id} className='carousel-card' onClick={() => detaillsCity(img._id)}>
            <img className='carousel-card-img' src={img.image} alt={`image ${img.name}`} />
            <div className='carousel-card-body'>
              <h3 className='carousel-card-title'>{img.name}</h3>
              <span className='carousel-card-country'>{img.country}</span>
            </div>
          </div>
        ))}

        {
          (index > 0 &&
            <button onClick={prevImage} className='btn-prev'>
              <CircleChevronLeftFill strokeWidth={2} size={30} />
            </button>
          )
        }
        {
          (index + 4 < cities.length &&
            <button onClick={nextImage} className='btn-next'>
              <CircleChevronRightFill strokeWidth={2} size={30} />
            </button>
          )
        }
      </div>
    </section>
  );
}

export default Carousel;

