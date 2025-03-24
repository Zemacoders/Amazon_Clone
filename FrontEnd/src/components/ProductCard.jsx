import { IoStarHalfOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

const ProductCard = ({product}) => {
  return (
    <div className="w-[227px]  flex flex-col px-1 gap-2 ">
      <div className=" rounded- md overflow-hidden p-6 border border-gray-300">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-40 object-cover  rounded-sm "
        />
        </div>
        <div className="space-y-2 ">
          <h1 className="text-lg font-semibold">{product.name}</h1>
          <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <IoStar className="text-primary" />
            <IoStar className="text-primary" />
            <IoStar className="text-primary" />
            <IoStar className="text-primary" />
            <IoStarHalfOutline className="text-primary" />
          </div>
          <span className="font-semibold text-lg">{product.rating}</span>
          </div>
        
            <h1 className="text-lg font-semibold">${product.price}</h1>        
      </div>
       
    </div>
  )
}

export default ProductCard
