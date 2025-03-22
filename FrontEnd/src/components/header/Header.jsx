import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import Search from '../Search';
import logo from '../../assets/amazonlogo.png'
import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";


const Header = () => {
    const [openSideBar, setOpenSideBar] = useState(false)
    const handleSideBar = () => {
        setOpenSideBar(!openSideBar)
    }

    return (
        <>
            <header className='top bg-secondary h-[70px] text-white'>
                <div className=' flex items-center gap-12 justify-between w-[97%]  mx-auto h-full '>

                    <img src={logo} alt="" className='h-[50px] w-[110px] pt-3 ' />

                    <div className='flex-1 max-w-[50%]'>
                        <Search />
                    </div>

                    <div className='flex items-center justify-between gap-10 '>
                        <p className='inline-flex flex-col  items-center' >
                            <Link to='cart'>
                            <FaShoppingCart className='text-2xl' />
                            <span className="hidden sm:inline">My Cart</span>
                            </Link>
                           
                        </p>
                        <p className='inline-flex flex-col  items-center'>
                            <Link to='login'>
                            <IoPerson className='text-2xl' />
                            <span className="hidden sm:inline">Account</span>
                            </Link>
                        
                        </p>
                    </div>
                </div>

            </header>
            <div className=' down bg-[#232F3E] text-white h-[40px]'>
                <nav className=' flex items-center justify-between h-full w-[96%] mx-auto ml-12'>
                    <ul className='flex items-center gap-10 text-lg'>
                        <li className='inline-flex items-center gap-2 cursor-pointer' onClick={handleSideBar}>
                            <AiOutlineMenu className='text-xl' />
                            <span>All</span>

                        </li>
                    
                        <li className='cursor-pointer'> <Link to='products'> Products </Link>  </li>
                        <li className='cursor-pointer'> <Link to='favorite'> Favorite </Link>  </li>
                    </ul>
                </nav>
                <SideBar open={openSideBar} setOpen={setOpenSideBar}/>
            </div>

        </>

    )
}

export default Header
