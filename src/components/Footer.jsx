import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_contents}>
        <h4>Search</h4>
        <h4>Terms of Service</h4>
        <h4>Return Policy</h4>
        <h4>Shipping Policy</h4>
        <h4>The Cocktail Blog</h4>
        <h4>The Wine Blog</h4>
      </div>

      <div className={classes.footer_sign_up}>
        <h3 className="headline">Sign Up To Our Newsletter</h3>
        <p>Subscribe to get special offers, cocktail recipes and our latest arrivals!</p>
        <input type="email" value="" placeholder="Enter your email" name="email" id="email"
          className={classes.footer_newsletter_input} size="50" autocorrect="off" autocapitalize="off" required="" />
      </div>
    </footer>
  )
}

export default Footer;