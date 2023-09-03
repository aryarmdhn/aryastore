import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // Jika produk tidak ditemukan
  if (!product) {
    return <section className="h-screen flex justify-center items-center">Harap Tunggu Ya...</section>;
  }

  // Destrukturisasi
  const { title, price, description, image } = product;

  return (
    <section className="pt-8 pb-4 md:pt-12 md:pb-8 lg:pt-16 lg:pb-12 h-screen flex items-center">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row items-center'>
          {/* Gambar */}
          <div className='flex flex-1 justify-center items-center mb-4 lg:mb-0 mt-3'>
            <img className='max-w-[200px] lg:max-w-sm w-full h-auto' src={image} alt={title} />
          </div>
          {/* Teks */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
            <div className='text-xl md:text-2xl lg:text-3xl text-red-500 font-medium mb-4'>Rp. {price}</div>
            <p className='text-sm md:text-base mb-6'>{description}</p>
            <button onClick={() => addToCart(product, product.id)} className='bg-green-500 py-3 md:py-4 px-6 md:px-8 text-white mb-5'>Tambah Ke Keranjang</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
