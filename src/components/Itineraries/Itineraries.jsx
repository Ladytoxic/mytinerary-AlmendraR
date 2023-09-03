import './Itineraries.css';
import { Heart, Clock, ChevronDownSmall, Hashtag, Money, Globe } from 'akar-icons';

const Itineraries = ({ _id, title, description, img, duration, likes, name, hashtags, activities, city, price }) => {
    return (
        <>
            <section className='itineraries fade-in-top '>
                <h2 className='section-title'>{city + ' itineraries'}</h2>
                <div className='card-itinerary' key={_id}>
                    <div className='card-itinerary-profile'>
                        <img className='card-itinerary-img-profile' src={img} alt={name + ' (image profile)'} />
                        <div className='box-profile'>
                            <h4 className='card-itinerary-name-profile'>{name}</h4>
                            <em>Public</em>
                        </div>
                    </div>
                    <div className='card-itinerary-body'>
                        <h3 className='card-itinerary-title'>{title}</h3>
                        <em className='card-itinerarary-description'>{description}</em>
                        <div className='card-itinerary-hashtags'>
                            <span className='hashtag'>
                                <Hashtag strokeWidth={2} size={20} />
                                CallesDeTierra
                            </span>
                            <span className='hashtag'>
                                <Hashtag strokeWidth={2} size={20} />
                                BarrioPicante
                            </span>
                            <span className='hashtag'>
                                <Hashtag strokeWidth={2} size={20} />
                                Fisuras
                            </span>
                        </div>
                        <div className='card-itinerary-price'>
                            <em>Price range:</em>
                            <span className='price'><Money strokeWidth={2} size={24} /></span>
                            <span className='price'><Money strokeWidth={2} size={24} /></span>
                            <span className='price'><Money strokeWidth={2} size={24} /></span>
                            <span className='price'><Money strokeWidth={2} size={24} /></span>
                        </div>
                        <div className='card-itinerary-details'>
                            <span className='card-itinerary-duration'>
                                <Clock strokeWidth={2} size={25} />
                                <strong>({duration} hours)</strong>
                            </span>
                            <span className='card-itinerary-likes'>
                                <Heart strokeWidth={2} size={25} />
                                <strong>({likes} Likes)</strong>
                            </span>
                        </div>
                    </div>


                    <button className='btn view-activities'>
                        <span>View more</span>
                        <ChevronDownSmall strokeWidth={2} size={28} />
                    </button>
                </div>
            </section>
            <section>

            </section>
        </>
    )
}

export default Itineraries;
