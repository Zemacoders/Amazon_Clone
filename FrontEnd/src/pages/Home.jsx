import HeroSlider from '../components/HeroSlider'
import BeautyIcon from '../assets/beautyIcon.png'
import ElectronicsIcon from '../assets/electronicsIcon.png'
import FashionIcon from '../assets/fashionIcon.png'
import SportIcon from '../assets/sportIcon.png'
import HomeIcon from '../assets/homeIcon.png'
import { FaLongArrowAltUp } from "react-icons/fa";

import data from '../amazon_products.json'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const categories = [
  {
    name: 'Electronics',
    icon: ElectronicsIcon
  },
  {
    name: 'Fashion',
    icon: FashionIcon
  },
  {
    name: 'Home & Kitchen',
    icon: HomeIcon

  },
  {
    name: 'Beauty & personal care',
    icon: BeautyIcon
  },
  {
    name: 'Sport & Outdoor',
    icon: SportIcon
  }
]

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const products = data[0].products;

  useEffect(() => {
    const filtered = products.filter(item => item.featured === true)
    setFeaturedProducts(filtered)
  }, [])

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  

  return (
    <div className="w-[98%] mx-auto md:w-[95%] lg:w-[90%] mb-12 pt-12 relative">
      {/* Hero Section */}
      <section className='px-4  '>
        <HeroSlider />
      </section>

      {/* Category section */}
      <section className='px-4 my-16'>
        <div className='flex items-center  gap-12'>
          <h1 className='text-2xl mb-4 capitalize '>Shope by Categorie</h1>
          <button className='p-0 -mt-2'> <Link to='category' className='text-primary text-lg font-bold '>see all</Link></button>
        </div>

        <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  justify-between sm:items-center gap-4 gap-y-6 mt-8">
          {
            categories.map((category, index) => (

              <div key={index} className='flex flex-col items-center gap-2'>
                <div className='w-40 h-40 rounded-full border-[1.5px] border-black/55 flex flex-col  items-center justify-center p-12'>
                  <img src={category.icon} className='' alt="" />
                </div>
                <p className=' text-lg   font-semibold leading-tight'>{category.name}</p>
              </div>
            ))
          }
        </div>
      </section>

      {/* featured products */}
      <section className='px-12 md:px-6 mt-24 '>
        <h1 className='text-2xl  mb-16 capitalize '>Featured Products</h1>

        <div className='grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 items-center'>
          {
            featuredProducts.length > 0 && (

              featuredProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              )
              )
            )
          }
        </div>
      </section>
      <div className='absolute -bottom-14 right-0 mb-4 mr-4'>
        <button onClick={scrollToTop} className=' bg-orange-100 p-2 rounded-sm cursor-pointer'><FaLongArrowAltUp className='text-lg'/></button>
      </div>
    </div>
  )
}

export default Home
