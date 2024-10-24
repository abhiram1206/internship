import React from 'react'
import './Features.css'
import tag from '../../assets/tag.png'
import reliability from '../../assets/reliability.png'
import sketch from '../../assets/sketch.png'
import maintanace from '../../assets/maintanace.png'
import made from '../../assets/made.png'
import plugin from '../../assets/plugin.png'

const Features = () => {
  return (
    <div className='features'>
        <section className='features-heading'>
            <h1>Why Choose Utmost UPVC Profiles?</h1>
        </section>
        <section className='features-list'>
            <div className="card-feature">
              <div className="card-feature-top">
                <img width={30} src={tag} alt="" />
                <h3>20% cheaper than market price</h3>
              </div>
              <p>Utmost offers our premium products at 20% lower than the standard market price. This means you can enjoy exceptional quality and durability while saving significantly on your project costs. By choosing Utmost, you’re not only getting superior products but also maximizing your budget efficiency</p>
            </div>
            <div className="card-feature">
              <div className="card-feature-top">
                <img width={80} src={made} alt="" />
                <h3>Made In India</h3>
              </div>
              <p>Promoting the 'Make in India' initiative, our UPVC windows company offers high-quality, locally-manufactured windows, combining innovation and durability to enhance Indian homes with energy efficiency and modern design.</p>
            </div>
            <div className="card-feature">
              <div className="card-feature-top">
                <img src={reliability} alt="" />
                <h3>30% more durable</h3>
              </div>
              <p>Indian weather can be tough—scorching heat, monsoons, and more. Our UPVC profiles are designed to handle it all. They won't rust, rot, or warp, so you get a product that's as durable as it is stylish.</p>
            </div>
            <div className="card-feature">
              <div className="card-feature-top">
                <img src={sketch} alt="" />
                <h3>Custom designs for everyone</h3>
              </div>
              <p>Why settle for the ordinary when you can have the extraordinary? Utmost offers a wide range of colors and designs, perfect for any Indian home. Whether you prefer a modern look or something more traditional, we've got you covered. Make your home as unique as you are!</p>
            </div>
            <div className="card-feature">
              <div className="card-feature-top">
                <img src={maintanace} alt="" />
                <h3>Low Maintenance, High Satisfaction</h3>
              </div>
              <p>Who has time for constant maintenance? Our UPVC profiles require zero maintenance. Just a quick wipe-down, and they're good as new. Spend less time worrying about maintenance and more time enjoying your beautiful home.</p>
            </div>
            <div className="card-feature">
              <div className="card-feature-top">
                <img src={plugin} alt="" />
                <h3>Save on electricity bills</h3>
              </div>
              <p>Tired of your home feeling like a sauna in summer? Our UPVC profiles are your answer. They insulate your home, keeping it cooler and helping you save big on energy bills. Think of it as a long-term investment that pays for itself!</p>
            </div>
        </section>
    </div>
  )
}

export default Features
