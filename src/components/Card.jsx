import classes from './Card.module.css'
import Button from './UI/Button';

const Card = ({imageSrc ,altText, productLabel ,productPrice ,buttonLabel ,buttonClass ="",onButtonClick}) => {
  return (
    <div className={classes.cards_contents}>
      <img src={imageSrc} alt={altText} style={{ width: "100%", height: "auto" }} className={classes.image} />
      <h4>{productLabel}</h4>
      <p>{productPrice}</p>
      <Button className={buttonClass} onClick={onButtonClick}>{buttonLabel}</Button>
    </div>
  )
}
export default Card;