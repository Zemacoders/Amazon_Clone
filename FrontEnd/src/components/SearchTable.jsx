import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Data from '../amazon_products.json';

const SearchTable = ({ term, visible, setVisible }) => {
  const navigate = useNavigate();
  const products = Data[0].products;

  const filteredProducts = term
    ? products.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      )
    : [];

  const handleClick = (productName) => {
    navigate(`/search?q=${encodeURIComponent(productName)}`);
    setVisible(false);
  };

  if (!visible || !term.trim()) return null;

  return (
    <div className='absolute bg-white text-black/80 top-[46px] left-4/12 right-0 z-10 h-max max-h-[80vh] overflow-auto py-6 shadow-2xl flex flex-col gap-2'>
      {filteredProducts.map((item, index) => (
        <div
          key={index}
          onClick={() => handleClick(item.name)}
          className='flex gap-6 items-center hover:bg-gray-200 duration-300 text-gray-700 text-lg px-6 py-2 cursor-pointer'
        >
          <CiSearch />
          <p className="text-xl font-semibold">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchTable;
