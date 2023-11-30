import { useEffect, useState } from 'react'
import axios from 'axios'
import VideoList from './components/VideoList.jsx';
import VideoModal from './components/VideoModal.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const [videos, setVideos] = useState([]);
const [selectedVideo, setSelectedVideo] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const API_KEY = 'AIzaSyAZNIZalIR51pnzjNDj59s4IuSiuM584R0';
const SEARCH_QUERY = 'workout';


useEffect(() => {
  const fetchVideos = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
        params: {
          part:'snippet',
          maxResults: 10,
          q: SEARCH_QUERY,
          key: API_KEY,
          type: 'video',
          
        },

      });
      if (response.data && response.data.items) {
        setVideos(response.data.items);
        setError(null);
      } else {
        setError('Something went wrong!');
      } 
        
      }catch (error) {
        console.error ('Error fetching videos;',error);
        setError('Something went wrong!. Please try again later');
      } finally {
        setLoading(false);
      }

    };
    fetchVideos();
  },[]);

  const openModal = (videoId) => {
    setSelectedVideo(videoId);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  }


  return (
    <>
<header className="header">
<h1>Easy Weigh Fitness</h1>
<p>Your Journey to a Healthier Lifestyle Starts Here</p>
</header>
<section className="main-content">
  <div className="card">
    <h2><center>WELCOME TO EASY WEIGH FITNESS</center></h2>
    <p><center>Your source to reach your health and fitness goals in a fun and eay way</center></p>
  </div>
  <div className="cta">
    <h3>Get Started Today!</h3>
    <button onClick={
      () => {
        setCount(count + 1)
      }
    } > Join Now</button>
    <p>{`${count} health enthusiasts have joined the site`}</p>

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
  {
            !loading && !error && (
              <section className="videos">
                <h2>YouTube Workout Videos</h2>
                <VideoList videos={videos} onVideoClick={openModal} />
                {selectedVideo && <VideoModal videoId={selectedVideo} onClose={closeModal} />}
              </section>
            )
          }

<section className="videos">
          <h2>YouTube Workout Videos</h2>
          <VideoList videos={videos} onVideoClick={openModal} />
        </section>
        {selectedVideo && <VideoModal videoId={selectedVideo} onClose={closeModal} />}



  <footer className="footer">
    <p>&copy; 2023 Fitness Platform. All righs reserved.</p>
    </footer>
    </>
  )
}

export default App
 