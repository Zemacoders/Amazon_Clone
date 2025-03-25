import { useEffect, useState, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import data from '../amazon_products.json';
import SearchTable from './SearchTable';
import { debounce } from 'lodash';
import { useSelector , useDispatch } from 'react-redux';
import { setCategory } from '../redux/slices/categorySlice';

const SearchInput = () => {
  const categoryName = useSelector(state => state.category);
  const categorys = data[0].categories;
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(searchParams.get('q') || '');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed) {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
      setShowSuggestions(false);
    } else {
      navigate('/');
    }
  };

  const debouncedInput = useCallback(
    debounce((value) => {
      setDebouncedTerm(value);
    }, 300), 
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setShowSuggestions(true);
    debouncedInput(value); 
  };

  useEffect(() => {
    const q = searchParams.get('q');
    setInputValue(q || '');
    setDebouncedTerm(q || '');
  }, [searchParams]);

  return (
    <div className="border border-primary flex bg-white rounded-md shadow-md relative">
      <form onSubmit={handleSearch} className="flex flex-1 justify-between">
        <select className="bg-gray-200 text-gray-800 outline-none px-2 py-2" value={categoryName} onChange={(e)=>dispatch(setCategory(e.target.value))} >
          <option value="all">All</option>
          {categorys.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search Amazon"
          value={inputValue}
          onChange={handleChange}
          className="outline-none px-6 py-2.5 peer placeholder-gray-700 text-gray-900 flex-1"
        />
        <button className="bg-primary text-white px-4 hover:bg-opacity-90">
          Search
        </button>
      </form>

      <SearchTable
        term={debouncedTerm}
        visible={showSuggestions}
        setVisible={setShowSuggestions}
      />
    </div>
  );
};

export default SearchInput;
