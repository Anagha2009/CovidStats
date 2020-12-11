import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Search from '../components/search/search';
import './statistics.css'
import Cards from '../components/cards/cards'
import Day1 from '../components/charts/day1'
import NewsCards from '../components/cards/newsCards';
import emojiFlags from "emoji-flags"
import {getCode} from 'country-list';


// import Table from '../components/tables/table'

const Statistics=({result})=> {
    const [countries, setCountries]=useState([])
    const [articles,setArticles] = useState([])
    const slugName = localStorage.getItem('slug')
    // console.log(slugName)
    const code= getCode(slugName)
    // console.log(code)
   

    useEffect(() => {
        axios.get(`https://api.covid19api.com/countries`)
         .then(res =>{
             setCountries(res.data);
         })
         .catch(err=>{
            console.log(err)
        })
    }, [])
    
    // console.log(result)
    var view=localStorage.getItem('slug')
    const code1= getCode(view)
    const flag= code1 ? emojiFlags.countryCode(code1) :'';

    return (
        <div className="stats">
            
            <div>
            <div className="row">
                <div className="col-lg-8">
                    <h6 className="text-left mt-4 ml-4">You're viewing:
                    <span className="font-weight-bolder text-uppercase h4 text-monospace ml-2">
                        {view}&nbsp;
                        {flag.emoji}

                    </span>
                    </h6>
                </div>
                <div className="col-lg-4 mt-3">
                <nav>
                <Search dash countries={countries}/>
                </nav>
                </div>
            </div>
             <hr/>

             <div id="cards">
                 <Cards result={result}/>
             </div>
{/* 
             <div id="table">
                 <Table />
             </div> */}
          
              <div id="region" className="container">
                <h5 className=" text-left text-uppercase mt-3 font-weight-bolder" style={{color:'#045769',fontSize:'larger'}}>Since Day 1</h5>
                <Day1 result={result}/>
              </div>
            
            <div id="news" className="container">
              <h5 className=" text-left text-uppercase mt-5 font-weight-bolder" style={{color:'#045769',fontSize:'larger'}}>Stay Aware</h5>
              <NewsCards/>
            </div>
              
            
            <p className="text-black text-monospace mt-5">Stay home.Stay safe</p>
             </div>
           
        </div>
    )
}
export default Statistics;
