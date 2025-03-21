import data from '../amazon_products.json'
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const category = data[0].categories;

  return (
    <div className="border border-primary flex justify-between  bg-white overflow-hidden rounded-md shadow-md peer-focus-within:outline outline-blue-500">

        <select className="bg-gray-200  text-gray-800 outline-none px-2 py-2">
        <option  value={'all'}>All</option>
          {category.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>

      <input
        type="text"
        placeholder="Search Amazon"
        className="outline-none px-6 py-2.5 peer placeholder-gray-700 text-gray-900 flex-1"
      />

      <button className="bg-primary  text-white px-4 flex items-center justify-center hover:bg-opacity-90">
        <FaSearch className="text-xl" />
      </button>
    </div>
  );
};

export default Search;
