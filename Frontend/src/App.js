import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './Redux/action';
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data)

  const [products, setProducts] = useState(data)

  useEffect(() => {
    if (data.length) {
      setProducts(data)
    }
    else {
      dispatch(fetchData());
    }
  }, [data])
  console.log('products', products)

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.category}</p>
        </div>
      ))}
    </>
  );
}

export default App;
