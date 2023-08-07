import './Carousel.css';
import { CircleChevronLeftFill, CircleChevronRightFill } from 'akar-icons';
import { useState, useEffect } from 'react';

const Carousel = () => {
  const img = [
    {
      id:1,
      title: 'Tokio',
      url: './image/tokio.jpg'
    },
    {
      id:2,
      title: 'New Your',
      url: './image/newyour.jpg'
    },
    {
      id:3,
      title: 'Buenos Aires',
      url: './image/buenos_aires.jpg'
    },
    {
      id:4,
      title: 'Madrid',
      url: './image/madrid.jpg'
    }
  ]
  const [index, setIndex] = useState(0)

  const nextImage = () => {
    setIndex(index + 4)
  }

  const prevImage = () => {
    setIndex(index - 4)
  }

  return (
    <section className='carousel fade-in'>
      <h2>Popular Mytineraries</h2>
      <div className='carousel-container'>
        {
          img.map((img) => (
            <div key={img.id} className='carousel-card'>
              <img className='carousel-card-img' src={img.url} alt={`image ${img.title}`} />
              <div className='carousel-card-body'>
                <h3 className='carousel-card-title'>{img.title}</h3>
              </div>
            </div>
          ))
        }
        <button onClick={prevImage} className='btn-prev'>
          <CircleChevronLeftFill strokeWidth={1} size={20} />
        </button>
        <button onClick={nextImage} className='btn-next'>
          <CircleChevronRightFill strokeWidth={1} size={20} />
        </button>
      </div>
    </section>
  )
}

export default Carousel
