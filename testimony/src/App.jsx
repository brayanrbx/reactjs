import Testimony from './components/Testimony'
import emma from '../src/assets/img/testimonio-emma.png'
import sarah from '../src/assets/img/testimonio-sarah.png'
import shawn from '../src/assets/img/testimonio-shawn.png'
import './App.css'
import '../src/css/Testimony.css'

function App() {
  return (
    <div className="App">
      <h1>Lorem lorem lorem lorem lorem</h1>
      <Testimony
        img={emma}
        name='Emma Bostian'
        country='Sweden'
        job='Software Engineer'
        company='Spotify'
        text="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify." />

      <Testimony
        img={sarah}
        name='Sarah Chima'
        country='Nigeria'
        job='Software Engineer'
        company='ChatDesk'
        text="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company." />

      <Testimony
        img={shawn}
        name='Shawn Wang'
        country='Singapore'
        job='Software Engineer'
        company='Amazon'
        text="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life." />
    </div>
  )
}

export default App
