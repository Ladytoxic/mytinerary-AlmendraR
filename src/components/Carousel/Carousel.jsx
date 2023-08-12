import './Carousel.css';
import { CircleChevronLeftFill, CircleChevronRightFill } from 'akar-icons';
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [cities, setCities] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/cities')
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        return resp.json();
      })
      .then(data => setCities(data.cities))
      .catch(error => {
        console.log('Fetching data from local file...');
        fetch('/data_cities.json')
          .then(resp => {
            if (!resp.ok) {
              throw new Error('Error fetching local data');
            }
            return resp.json();
          })
          .then(data => setCities(data))
          .catch(localError => {
            console.log('Error fetching local data:', localError);
          });
      });
  },
    []
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

  return (
    <section className='carousel fade-in'>
      <h2>Popular Mytineraries</h2>
      <div className='carousel-container'>
        {cities.slice(index, index + 4).map((img) => (
          <div key={img.id} className='carousel-card'>
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

