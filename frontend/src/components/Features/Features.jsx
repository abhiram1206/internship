import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <div className='features'>
        <section className='features-heading'>
            <h1>Why Choose Utmost UPVC Profiles?</h1>
        </section>
        <section className='features-list'>
            <div className="card-feature">
              <h3>20% cheaper than market price</h3>
              <p>Utmost offers our premium products at 20% lower than the standard market price. This means you can enjoy exceptional quality and durability while saving significantly on your project costs. By choosing Utmost, you’re not only getting superior products but also maximizing your budget efficiency</p>
            </div>
            <div className="card-feature">
              <h3>30% more durable</h3>
              <p>Indian weather can be tough—scorching heat, monsoons, and more. Our UPVC profiles are designed to handle it all. They won't rust, rot, or warp, so you get a product that's as durable as it is stylish.</p>
            </div>
            <div className="card-feature">
              <h3>Custom designs for everyone</h3>
              <p>Why settle for the ordinary when you can have the extraordinary? Utmost offers a wide range of colors and designs, perfect for any Indian home. Whether you prefer a modern look or something more traditional, we've got you covered. Make your home as unique as you are!</p>
            </div>
            <div className="card-feature">
              <h3>Low Maintenance, High Satisfaction</h3>
              <p>Who has time for constant maintenance? Our UPVC profiles require zero maintenance. Just a quick wipe-down, and they're good as new. Spend less time worrying about maintenance and more time enjoying your beautiful home.</p>
            </div>
            <div className="card-feature">
              <h3>Save on electricity bills</h3>
              <p>Tired of your home feeling like a sauna in summer? Our UPVC profiles are your answer. They insulate your home, keeping it cooler and helping you save big on energy bills. Think of it as a long-term investment that pays for itself!</p>
            </div>
        </section>
    </div>
  )
}

export default Features
