import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import TweetContainer from './TweetContainer';

function App() {
  return (
    <>
      <div className='App'>
        <div><TweetContainer status="Start coding and build stuffs!"/></div>
        <div></div>
        <div><TweetContainer status="At GBC, learning blockchain and it's really fascinating!"/></div>
        <div></div>
        <div><TweetContainer status="............ learning to create my own NFTs and coins like crypto"/></div>
        <div></div>
      </div>
      
    </>
    
  );
}

export default App;