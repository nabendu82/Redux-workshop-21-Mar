import React from 'react'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productsActions'
import { useEffect } from 'react'

const ProductListing = () => {
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const response = await axios
          .get('https://fakestoreapi.com/products')
          .catch(err => console.log(err))
    console.log(response.data)
    dispatch(setProducts(response.data))  
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing