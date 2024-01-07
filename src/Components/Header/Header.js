import React from "react";
import {IoIosSearch, IoIosCart } from "react-icons/io";
import { Container } from "react-bootstrap";

const Header = () => {
 

  return (
    <Container>
      <div
        className="flex items-center justify-between"
       
      >
        <div className="flex items-center ">
          {/* <div className='cursor-pointer' onClick={()=> setIsShowNavMenu(!isShowNavMenu)}>
             <IoIosMenu size={30} />
        </div> */}
          <span className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Fly
            <span className="text-orange-400">Eats</span>
          </span>

          <div className="hidden lg:flex  justify-center items-center bg-gray-300 p-1 rounded-full">
            <span className="bg-orange-400 px-2 py-1.5 rounded-full text-white">
              Free
            </span>
            <span className="p-1">Delivery</span>
          </div>
        </div>

        <div className="flex items-center px-2 w-[200px] md:w-[400px] lg:w-[600px] rounded-full bg-gray-300">
          <IoIosSearch size={30} />

          <input
            type="text"
            placeholder="Search your Item"
            className="bg-transparent w-full focus:outline-none"
          />
        </div>

        <button className="bg-orange-400 text-white p-2 rounded-full hidden md:flex justify-center items-center">
          <IoIosCart size={20} />
          Cart
        </button>

        {/* 
       { isShowNavMenu && <div className='fixed w-full h-screen top-0 left-0 bg-black/60  z-10'></div>
       }
      


      <div className={ isShowNavMenu ? 'fixed bg-white w-[300px] h-screen duration-300 top-0 left-0 z-10': 'fixed bg-white w-[300px] h-screen duration-300 top-0 left-[-100%] z-10'}>
         
      </div> */}
      </div>
    </Container>
  );
};

export default Header;
