import { useNavigate } from 'react-router-dom';
import './Card.css';
import { Location } from 'akar-icons';

const Card = ({ _id, name, country, image, currency }) => {
  const navigate = useNavigate();
  const detailsCity = () => {
    navigate('/cities/' + _id)
  }

  return (
    <div className='card' key={_id}>
      <img className='card-img' src={image} alt={'imagen ' + name} />
      <div className='card-header'>
        <h4 className='card-title'>{name}</h4>
        <span className='card-coutry'><Location strokeWidth={2} size={16} /> {country}</span>
      </div>
      <span className='card-currency'>{currency}</span>
      <button className='card-btn' onClick={detailsCity}>View more</button>
    </div>
  )
}

export default Card;
