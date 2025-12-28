import Card from './components/Card';
import Section from './components/SectionLayout';
import './Home.css'

import product1 from './assets/images/new_product1.png'
import product2 from './assets/images/new_product2.png'
import product3 from './assets/images/new_product3.png'
import product4 from './assets/images/new_product4.png'
import bestSeller1 from './assets/images/bestseller_product1.png'
import bestSeller2 from './assets/images/bestseller_product2.png'
import bestSeller3 from './assets/images/bestseller_product3.png'
import categories1 from './assets/images/categories_hats.png'
import categories2 from './assets/images/categories_shirts.png'
import categories3 from './assets/images/categories_swimwear.png'
import categories4 from './assets/images/categories_sweatshirts.png'


const Home = () => {

  return (
    <>
      <h1 className='main_headline'>Shop</h1>
      <Section headline='New In' buttonLabel='New In' >
        <Card imageSrc={product1} altText='A picture of girl with a shirt' productLabel='Gin Tonic Shirt' productPrice='250 SEK' buttonLabel='Quick View' />
        <Card imageSrc={product2} altText='A picture of a guy with a shirt' productLabel='Pina Colada Shirt' productPrice='250 SEK' buttonLabel='Quick View' />
        <Card imageSrc={product3} altText='A picture of a guy with sweater' productLabel='Vodka Sweatshirt' productPrice='450 SEK' buttonLabel='Quick View' />
        <Card imageSrc={product4} altText='A picture of a guy with a shirt' productLabel='Gin Tonic Tees' productPrice='250 SEK' buttonLabel='Quick View' />
      </Section>
      <Section headline='Loved By You - Best Seller' buttonLabel='Best Seller'>
        <Card imageSrc={bestSeller1} altText='Guy covering eyes with 3 hats on' productLabel='Gin Tonic Shirt' productPrice='250 SEK' buttonLabel='Add To Cart' />
        <Card imageSrc={bestSeller2} altText='Girl and a guy smiling' productLabel='Pina Colada Shirt' productPrice='250 SEK' buttonLabel='Add To Cart' />
        <Card imageSrc={bestSeller3} altText='Picture of three guys' productLabel='Vodka Sweatshirt' productPrice='450 SEK' buttonLabel='Add To Cart' />
        <Card buttonLabel='View More' />
      </Section>
      <Section headline='What are you looking for?' buttonLabel='Browse Categories'>
        <Card imageSrc={categories1} altText='Holding a hat' productLabel='Hats' buttonLabel='Browse Hats' buttonClass='browse_btn' />
        <Card imageSrc={categories2} altText='Picture of shirts' productLabel='Shirts' buttonLabel='Browse Shirts' buttonClass='browse_btn' />
        <Card imageSrc={categories3} altText='Green swimwear' productLabel='Swimwear' buttonLabel='Browse Swimwear' buttonClass='browse_btn' />
        <Card imageSrc={categories4} altText='Shirts pilled on top of each other' productLabel='Sweatshirt' buttonLabel='Browse Sweatshirts' buttonClass='browse_btn'/>
      </Section>
    </>
  )
}

export default Home;
