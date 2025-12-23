import classes from './About.module.css'
import image from '../assets/images/about-us-blackandwhite.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={classes.main_content}>
      <h1 className={classes.about_us_headline}>About Us</h1>
      <h3 className={classes.about_us_subheadline}>Our Story</h3>
      <div className={classes.about_us_contents}>
        <section className={classes.about_us_picture}>
          <img src={image} alt="Friends drinking cocktails" className={classes.image} />
        </section>

        <section className={classes.about_us_text}>
          <h4 className={classes.about_us_tagline}>Founded in Sickla. Inspired by the classics</h4>
          <p>A great story starts with a couple of drinks – and so did we.
            Founded in Sickla in 2025, OldFashioned was born from a shared love for cocktails, bold yet clean
            design,
            and the kind of pieces we’d actually want to wear – and figured likeminded people around the world
            would
            too.</p>
          <p>We’re inspired by the classics – like the Negroni. First mixed in 1919, now a staple on menus (and in
            lives)
            across the globe. Not a trend, but a lifestyle.
            That’s how we see what we do: clothing made to feel right – every day, not just for the moment.</p>
          <p>Our pieces are made to be worn, lived in, and come along for whatever the night turns into.
            Nothing complicated. Just good-looking essentials, made with attention to quality and detail.</p>
          <p>OldFashioned isn’t about dressing up.
            It’s about feeling like yourself – wherever the night takes you.</p>
          <p className={classes.about_us_closing_line}>Here's to the nights we won't remember with friends we will never
            forget.
          </p>
          <p>/OldFashioned</p>
          <Link to= '/' className='about_us_link'>
            <h4>Check out our apparel now!</h4>
          </Link>
        </section>
      </div>
    </div>
  )
}

export default About;