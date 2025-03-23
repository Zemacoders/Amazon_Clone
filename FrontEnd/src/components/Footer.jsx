
import { Link } from 'react-router-dom'

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className='pt-[60px] pb-[30px] bg-secondary '>

     <div className='sm:px-4 px-12 xl:w-[90%] sm:w-[98%] w-full mx-auto'>

      <div className=" mx-auto grid grid-cols-12 justify-between gap-4   px-2">      
      <div className='col-span-12 md:col-span-3 sm:col-span-6 text-white'>
      <div className="footer_quick-link">
        <h4 className="mb-8 text-white text-lg capitalize">get to know Us</h4>
        <ul className='mb-3 bg-transparent text-white space-y-1'>
        <li className='px-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'> Careers
          </Link>
        </li>
        <li className='px-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>Blog
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'> About Us
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>Invester Relations
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'> Amazon Devices
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>Amazon Science
          </Link>
        </li>
        </ul>
      </div>
      </div>

      <div className='col-span-12 md:col-span-3 sm:col-span-6 text-white'>
      <div className="footer_quick-link">
        <h4 className="mb-8 text-white text-lg capitalize">Make money with us</h4>
        <ul className='mb-3 bg-transparent text-white space-y-1'>
        <li className='px-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'> Sell Products
          </Link>
        </li>
        <li className='px-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>Amazon Business
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'> Sell Apps
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>Become Affilate
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'> Advertse Products
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>Self  Punblish with us
          </Link>
        </li>
        </ul>
      </div>
      </div>

      <div className=' md:col-span-3 sm:col-span-6 col-span-12'>
      <div className="footer_quick-link">
      <h4 className="mb-8 text-white text-lg capitalize">Amazon Payment Product</h4>
        <ul className='mb-3 space-y-1' >
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'> Amazon Business Card
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>Shop with points
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>Reload your balance
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>Amazon Currency converter
          </Link>
        </li>
        </ul>
      </div>
      </div>

      <div className=' md:col-span-3 sm:col-span-6 col-span-12'>
      <div className="footer_quick-link">
      <h4 className="mb-8 text-white text-lg capitalize">Lets us help you</h4>
        <ul className='mb-3 space-y-1'>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'> your account
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>Your orders
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>Shipping Rates & Policies
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>Return & Replacement
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>Maage your content
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>help center
          </Link>
        </li>
        </ul>
      </div>
      </div>

      <div className='col-span-12  gap-12 items-center border-t-2 border-white pt-8  mt-9'>
      <ul className=' bg-transparent text-white  flex flex-wrap items-center gap-2 sm:mb-2 mb-6 justify-between max-w-[700px] mx-auto'>
        <li className='px-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'> Conditions of use
          </Link>
        </li>
        <li className='px-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>privacy notice
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>Customer health data privacy
          </Link>
        </li>
        <li className='ps-0 border-0'>
          <Link className='text-white opacity-75 hover:opacity-100 capitalize ' to='#'>Your ads perivacy choices
          </Link>
        </li>
        
        </ul>
      <p className="  text-white opacity-90 mx-auto text-lg text-center">
        &copy;  1996-{year}, Amazon.com , inc , or its affiliates
      </p>
      </div>
      </div>
      </div>
    </footer>
    )
}

export default Footer