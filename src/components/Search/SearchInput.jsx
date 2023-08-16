import './SearchInput.css';
import { Search } from "akar-icons";

const SearchInput = () => {
  return (
    <div className='search'>
      <input className='input-search' type="text" placeholder='Search City' />
      <button>
        <Search strokeWidth={3} size={20} />
      </button>
    </div>
  )
}

export default SearchInput
