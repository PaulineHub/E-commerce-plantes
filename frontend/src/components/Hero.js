const Hero = (props) => {
  const {title, subtitle, imageClass} = props
  return (
    <>
      <section className=' hero-mid-split-wrapper '>
        <div
          className={`hero-split-left-column hero-split-left-column--${imageClass}`}
        >
          <div className='hero-split-content no-margin-bottom'>
            <h1>{title}</h1>
            <p className='feature-paragraph width-70'>{subtitle}</p>
          </div>
        </div>
        <div className='hero-split-right-column'>
          <div className={`split-image split-image--${imageClass}`}></div>
        </div>
      </section>
    </>
  )
};

export default Hero;
