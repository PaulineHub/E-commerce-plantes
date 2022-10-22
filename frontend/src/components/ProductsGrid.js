import Pagination from './Pagination'
import ProductItem from './ProductItem'
import { useState, useEffect } from 'react'
import { api } from '../api'

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    // axios.get('/api/v1/products');
    api
      .getProducts()
      .then((products) => {
        setProducts(products)
      })
      .catch((e) => {
        setError(e)
      })
  }, [])
  console.log('products:', products)
  // boucle pour passer params a chaque product item

  if (error) {
    return 'Enable to fetch the products!'
  }

  return (
    <div className='container section no-padding-mobile'>
      <div role='list' className='products-list' data-js-products-wrapper>
        {/* <ProductItem /> */}
        {
          products.map(product => <div key={product.id}>{product.name}</div>)
        }
      </div>
      {/* <Pagination /> */}
    </div>
  )
}

export default ProductsGrid