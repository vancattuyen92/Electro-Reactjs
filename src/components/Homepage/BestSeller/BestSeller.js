import '../../../index.scss'
import './BestSeller.scss'
import * as productApi from '../../../apis/apis';
import { useState, useEffect } from 'react';
import 'antd/dist/antd.css';


export default function Recently() {
    const [products, setProducts] = useState([])
    //fetch Products
    const fetchProducts = async() => {
      const data = await productApi.fetchProducts();
      setProducts(data.data)
      console.log('dataaaaa', data.data)
    }
    useEffect(() => {
      fetchProducts();
    },[])
    
    return (
        <div className='best-seller container'>
            <h2>Best Seller</h2>
            <div>
              {products.map((product) => 
                <div key={product.id}>
                  <p>cate: {product.category}</p>
                  <img src={product.image} alt=""/>
                  <p>{product.name} </p>
                  <p>{product.promotion_price}</p>
                  <p>{product.origin_price}</p>
                </div>
              )}
             
              
            </div>
        </div>
    )
}