import './App.css';
import PromisesMail from './components/PromisesMail';
import PromisesPhotos from './components/PromisesPhotos';
import Render from "./render/Render";




function App() {
  return (
    <div className="App" style={{color:'black' , backgroundColor:' solid yellow'}}>
      {/* <PromisesMail /> */}
      {/* <PromisesPhotos /> */}
      <Render/>
    

      
    </div>

  );
}
export default App;