import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import Header from './components/Header';
import Data from './components/Data.jsx';

const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]


function App() {
  return (
    <div>
      <Header />

      <Data myprop = {imageData}></Data>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;