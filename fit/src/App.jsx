import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<header className="header">
<h1>Fitness Platform</h1>
<p>Your Journey to a Healthier Lifestyle Starts Here!</p>
</header>
<section className="main-content">
  <div className="card">
    <h2>Welcome to our Fitness Platform!</h2>
    <p>Discover a variety of workouts, nutrition plans and expert guidance. </p>
  </div>
  <div className="cta">
    <h3>Get Started Today!</h3>
    <button onClick={
      () => {
        setCount(count + 1)
      }
    } > Join Now</button>
    <p>{`${count} people have joined the site`}</p>

  </div>
  </section>
  <section className="features">
    <div className="feature">
      <h4>Personalized Workouts</h4>
      <p>Access Customized Workout Plans Tailored to your Fitness Goals</p>
    </div>
    <div className="feature">
      <h4>Nutrition Guidance</h4>
      <p>Explore Nutrition Plans designed to compliment your fitness routine</p>
      </div>
      <div className="feature">
        <h4>Expert Advice</h4>
        <p>Receive Guidance from Experienced Trainers to maximize your results</p>
        </div>


  </section>
  <footer className="footer">
    <p>&copy; 2023 Fitness Platform. All righs reserved.</p>
    </footer>
    </>
  )
}

export default App
 