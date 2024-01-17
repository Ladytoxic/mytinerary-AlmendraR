import './Banner.css';
import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <header className='headerPage citiesPage'>
      <img className='banner-img' src={bannerImg} alt="" />
      <div className='hero'>
        <h1 className='title'>Cities</h1>
        <em className='subtitle'>Collection of the most beautiful place and experience.</em>
      </div>
    </header>
  )
}

export default Banner;
