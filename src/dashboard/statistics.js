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
    console.log(slugName)
    const code= getCode(slugName)
    console.log(code)
    useEffect(() => {
       const options = {
           method: 'GET',
           url: `https://coronavirus-smartable.p.rapidapi.com/news/v1/${code}/`,
           headers: {
             'x-rapidapi-key': '06c8ca8549msh7d544746656b576p1712c2jsn369cb4e27e92',
             'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com'
           }
         };
         
         axios.request(options).then(function (response) {
             setArticles(response.data.news);
             console.log(response.data.news)
         }).catch(function (error) {
             console.error(error);
         });
   }, [])

    useEffect(() => {
        axios.get(`https://api.covid19api.com/countries`)
         .then(res =>{
             setCountries(res.data);
         })
         .catch(err=>{
            console.log(err)
        })
    }, [])
    
    console.log(result)
    var view=localStorage.getItem('slug')
    const code1= getCode(view)

    return (
        <div className="stats">
            
            <div>
            <div className="row">
                <div className="col-lg-8">
                    <h6 className="text-left mt-4 ml-4">You're viewing:
                    <span className="font-weight-bolder text-uppercase h4 text-monospace ml-2">
                        {view}&nbsp;
                        { code1 ? emojiFlags.countryCode(code1) : ''}

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
              {articles.length!=0 ? (
              <div id="news" className="container">
                <h5 className=" text-left text-uppercase mt-5 font-weight-bolder" style={{color:'#045769',fontSize:'larger'}}>Stay Aware</h5>
                <NewsCards articles={articles}/>
              </div>
              ):''}


            <p className="text-black text-monospace mt-5">Stay home.Stay safe</p>
             </div>
           
        </div>
    )
}
export default Statistics;
