import React, { FC } from 'react'

interface propsTypes{
    img: string;
    title: string;
    desc: string;
    price: string;
}

const ProductCard : React.FC<propsTypes> =({img,title,desc,price})=> {
  return (
    <div className='px-4 border border-gray-200 shadow-lg rounded-xl max-w-[300px]  h-[380px]'>
        <div className='w-full '>
            <img src={img} alt={title} className='h-[230px] object-cover' />

        </div>
        <div className='space-y-2 py-2'>
            <h2 className='text-accent font-medium uppercase'>{title}</h2>
            <p className='text-gray-500 max-w-[150px]'>{desc}</p>
            <div className='font-bold flex gap-4'>Rs.{price}</div>
            <button className=' bg-accent rounded-md px-6 py-2 text-xs text-blackish '>Add to cart</button>
        </div>
        
    </div>
  )
}

export default ProductCard