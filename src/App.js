// import './App.css';
// import Card from './component/card';
// import Statexp from './component/stateExp';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import Call from './component/stateexample';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';

function App() {
  // const duke = [
  //   {
  //     title:'welcome',
  //     path:'https://upload.wikimedia.org/wikipedia/commons/8/8d/Ktm_duke_390.jpg',
  //     population:10000
  //   },

  //   {
  //     title:'welcome',
  //     path:'https://bd.gaadicdn.com/processedimages/ktm/ktm-duke-390/640X309/ktm-duke-3905fd47cd663191.jpg',
  //     population:20000
  //   },

  //   {
  //     title:'welcome',
  //     path:'https://images.91wheels.com/assets/b_images/main/models/profile/profile1661769224.jpg',
  //     population:30000
  //   }
  // ]
  // return (
  //   <div className='parent' >
  //     { 
  //       duke.map((obj ,i)=>{
  //         return <Card 
  //         key={i}
  //         title={obj.title}
  //         path={obj.path}
  //         population={obj.population}
  //         />
  //       })
  //   }
  return (
  <div>
    <BrowserRouter>
    <Link to ="/">Home </Link>
    <Link to ="/about">About </Link>
    <Link to ="/contact">Contact </Link>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact:id" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
 </div>
  )
      //   {/* <Card title='welcome' path='https://upload.wikimedia.org/wikipedia/commons/8/8d/Ktm_duke_390.jpg' population={10000}/>
    // <Card  title='welcome2' path='https://bd.gaadicdn.com/processedimages/ktm/ktm-duke-390/640X309/ktm-duke-3905fd47cd663191.jpg' population={20000}/>
    // <Card  title='welcome3' path='https://images.91wheels.com/assets/b_images/main/models/profile/profile1661769224.jpg' population={30000}/>
    // <Card  title='welcome4' path='https://www.bajajautofinance.com/uploads/vehicles/390-DUKE.jpg' population={40000}/> */}
    // {/* </div> */}
  
}
export default App;
