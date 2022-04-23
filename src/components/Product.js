import React from 'react'
import data from './Data'
import ProductItem from './ProductItem';

const Product = () => {
  return (
    <div className='product'>
        <div className='top'><h1>All Products Or Items for Sell</h1></div>
        <section className="container py-4">
        <div className="row justify-content-center">
            {data.productData.map((items)=>{
                return(
                    <ProductItem
                    key={items.id}
                    Title={items.title}
                    desc={items.description}
                    img={items.image}
                    price={items.price}
                    item={items}
                    />
                );
            })}
        </div>
        </section>
    </div>
  )
}

export default Product