import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import SearchInput from "../SearchInput";
import logo from '../../assets/amazonlogo.png'
import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import CountryDialog from "./CountryDialog";



const Header = () => {
    const location=useLocation()
    const path=location.pathname;
    const [openCountry, setOpenCountry] = useState(false)
    const [openSideBar, setOpenSideBar] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState('Ethiopia')

    const handleSideBar = () => {
        setOpenSideBar(!openSideBar)
    }
 
    const handleCountryOpen = () => {
        setOpenCountry(true);
    };

    const handleCountryClose = () => {
        setOpenCountry(false);
    }


    return (
        <>
            <header className='top bg-secondary h-[70px] text-white'>
                <div className=' flex items-center gap-12 justify-between w-[97%]  mx-auto h-full '>

                    <img src={logo} alt="" className='h-[50px] w-[110px] pt-3 ' />

                    <div className='flex-1 max-w-[50%]'>
                        <SearchInput />
                    </div>

                    <div className='flex items-center justify-between gap-10 '>
                       <button onClick={handleCountryOpen} className="flex items-end  gap-1 outline-none hover:ring-1 p-1 px-2 ring-white rounded-sm">
                            <GrLocation className='text-2xl' />
                            <p className='hidden sm:block text-gray-300'>Deliver to <br/> <span className="text-white font-bold">{selectedCountry}</span></p>
                       </button>
                        <p className='' >
                            <Link to='cart' className="inline-flex flex-col  items-center relative
">
                            <FaShoppingCart className='text-2xl' />
                            <span className="hidden sm:block">My Cart</span>
                            <span className="absolute -top-1 right-1  text-sm w-5 h-5 flex items-center justify-center rounded-full bg-primary text-white">2</span>
                            </Link>
                           
                        </p>
                        <p className=''>
                            <Link to='login' className="inline-flex flex-col  items-center">
                            <IoPerson className='text-2xl' />
                            <span className="hidden sm:block">Account</span>
                            </Link>
                        
                        </p>
                       
                    </div>
                </div>

            </header>
            <div className=' down bg-[#232F3E] text-white h-[50px]'>
                <nav className=' flex items-center justify-between h-full w-[96%] mx-auto ml-12'>
                    <ul className='flex items-center gap-10 text-lg'>
                        <li className='inline-flex items-center gap-2 cursor-pointer' onClick={handleSideBar}>
                            <AiOutlineMenu className='text-xl' />
                            <span>All</span>
                        </li>                   
                        <li className='cursor-pointer relative'> <Link to='products'> Products </Link>  <span className={`absolute -bottom-1 left-2 right-2 h-[2px] text-primary bg-primary duration-700  ${path==='/products'?'opacity-100':'opacity-0'}`}/></li>
                        <li className='cursor-pointer relative'> <Link to='favorite'> Favorite </Link> <span className={`absolute -bottom-1 left-2 right-2 h-[2px] text-primary bg-primary duration-700  ${path==='/favorite'?'opacity-100':'opacity-0'}`}/> </li>
                    </ul>
                </nav>
                <SideBar open={openSideBar} setOpen={setOpenSideBar}/>
            </div>
            <CountryDialog open={openCountry} handleClose={handleCountryClose} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />        </>

    )
}

export default Header
