import classes from './SectionLayout.module.css'
import Button from './UI/Button';

const Section = ({ headline, buttonLabel, children, sectionClass ="" }) => {
  return (
    <>
      <section className={`${classes.section} ${sectionClass}`.trim()}>
        <h3 className={classes.headline}>{headline}</h3>
        <Button className = 'section_btn'>{buttonLabel}</Button>
        <div className={classes.card_wrapper}>
          {children}
        </div>
      </section>
    </>
  )
}

export default Section;