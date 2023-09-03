import React, { useContext } from "react";
// Import Link
import { Link } from "react-router-dom";
// Import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// Import components
import CartItem from "../components/CartItem";
// Import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// import cart
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  // Gunakan tanda kutip belakang (backticks) untuk string template
  const sidebarClassName = `${isOpen ? "right-0" : "-right-full"} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 ig:px-[35px]`;

  return (
    <div className={sidebarClassName}>
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Keranjang ({itemAmount})</div>
        {/* icons */}
        <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[380px] lg:h-[440px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          {/* {total} */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total yang harus dibayar = </span>Rp. {parseFloat(total).toFixed(2)}
          </div>
          {/* {clear cart} */}
          <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
            <FiTrash2 />
          </div>
        </div>
        <Link to='/' className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium'>Lihat Keranjang</Link>
        <Link to='/' className='bg-green-500 flex p-4 justify-center items-center text-white w-full font-medium'>Pesan</Link>
      </div>
    </div>
  );
};

export default Sidebar;
