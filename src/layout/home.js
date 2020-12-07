import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './home.css'
import map from './home.jpg'
import Search from '../components/search/search';

 const Home=()=> {
    const [loading, setloading]=useState(true)
    const [countries, setCountries]=useState([])
    
   useEffect(() => {
       axios.get(`https://api.covid19api.com/countries`)
        .then(res =>{
            setloading(false);
            setCountries(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
   }, [])
   
    return (
        <div id="bg-image">
            <h3 className="text-white font-weight-bolder text-monospace" id="h3">
                <strong className="strong">Covidstats</strong>
            </h3>
            <div className='search'>
            <Search countries={countries}/>

            </div>

            <footer style={{position:'absolute',bottom:0,left:'45%',textTransform:'uppercase'}}>
             <h6 className="text-white text-monospace">Stay home.Stay safe</h6>
            </footer>

        </div>
    
    )
}

export default Home;
