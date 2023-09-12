import { useEffect, useState } from 'react';
import './App.css';
import { Card, ListGroup } from 'react-bootstrap';
import BannerComponent from './components/BannerComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './components/CardComponent';



function App() {
  const  [data,setData] = useState([])
  const base_url = 'https://dummyjson.com/products'

  const fetchData = async()=>{
    const response =await fetch(base_url)
    .then((res)=>res.json())
    .then((d)=>setData(d.products))  //array of products
    console.log(response)
  }
  
  console.log(data)
  useEffect(()=>{
    fetchData()
  },[])


 
  return (
    <div className="App">
      <header className="App-header">
        <BannerComponent/>
        <CardComponent/>



      </header>
    </div>
  );
}

export default App;
