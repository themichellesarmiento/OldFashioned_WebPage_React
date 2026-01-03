import { useContext, useState, useEffect } from 'react';
import Card from './components/Card';
import Section from './components/SectionLayout';
import CartContext from './store/CartContext';
import './Home.css'
import { useHttp } from './hooks/useHTTP';

const requestConfig = {}

const Home = () => {

  const cardContext = useContext(CartContext);
  const {
    data: homepageData,
    isLoading,
    error
  } = useHttp('http://localhost:3000/homepage', requestConfig, {
    newProducts: [],
    bestSellers: [],
    categories: []
  })

  const { newProducts, bestSellers, categories } = homepageData;

  if (isLoading) return <p className='center'>Loading...</p>;
  if (error) return <p className='center error'>{error}</p>;

  return (
    <>
      <h1 className='main_headline'>Shop</h1>
      <Section headline='New In' buttonLabel='New In' >
        {newProducts.map(product => (

          <Card key={product.id}
            imageSrc={`http://localhost:3000${product.image}`}
            productLabel={product.name}
            productPrice={product.price}
            altText={product.altText}
            buttonLabel='Quick View' />
        ))}

      </Section>

      <Section headline='Loved By You - Best Seller' buttonLabel='Best Seller'>
        {bestSellers.map(product => (
          <Card
            key={product.id}
            imageSrc={`http://localhost:3000${product.image}`}
            productLabel={product.name}
            productPrice={product.price}
            altText={product.altText}
            buttonLabel='Add To Cart'
            onButtonClick={() => cardContext.addItem(product)} />

        ))}
        <Card buttonLabel='View More' />

      </Section>

      <Section headline='What are you looking for?' buttonLabel='Browse Categories'>
        {categories.map(product => (
          <Card
            key={product.id}
            imageSrc={`http://localhost:3000${product.image}`}
            productLabel={product.category}
            altText={product.altText}
            buttonLabel={`Browse ${product.category}`}
            buttonClass='browse_btn' />
        ))}

      </Section>

    </>
  )
}

export default Home;
