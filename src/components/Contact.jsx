import classes from './Contact.module.css'
import image from '../assets/images/hero-image-blackandwhite.png'

const Contact = () => {
  return (
    <div>
      <h1 className={classes.contact_us_headline}>Get in touch</h1>
      <h3 className={classes.contact_us_subheadline}>Use this text to share information about your brand with your customers.
        Describe a product, share announcements, or welcome customers to your store.</h3>
      <section className={classes.contact_us_form}>
        <form action="mailto:oldfashioned@yahoo.com" method="POST" enctype="text/plain" className={classes.form}>
          <div className={classes.user_input}>
            <label for="name">First Name: </label>
            <input type="text" name="name" id="name" required pattern="^[A-Z][a-z]+(\s[A-Z][a-z]?){0,}" />
          </div>
          <div className={classes.user_input}>
            <label for="email">Email: </label>
            <input type="email" name="email" id="email" maxlength="100" autocorrect="off" autocapitalize="off"
              required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
          </div>
          <div className={classes.user_input}>
            <label for="message">Message: </label>
            <textarea type="textarea" name="message" id="message" placeholder="Type your message here"
              required=""></textarea>
          </div>
          <div className={classes.user_input}>
            <button className={classes.submit}>Send</button>
          </div>
        </form>
      </section>
      <section className={classes.contact_us_customer_service}>
        <div className={classes.image_container}>
          <img src={image} alt="Friends drinking cocktails" className={classes.image} />
        </div>
        <div className={classes.customer_support}>
          <h2 className={classes.customer_support_headline}> Customer Support</h2>
          <p>CHAT</p>
          <p>M-F: 08:00 until 19:00</p>
          <p>S: 08:00 until 16:00</p>
        </div>
      </section>
    </div>
  )
}

export default Contact;