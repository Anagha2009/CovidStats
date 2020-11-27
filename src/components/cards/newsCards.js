import axios from "axios";
import React,{useState,useEffect} from 'react'
import {getCode} from 'country-list';
import ReadMoreReact from 'read-more-react';
import './cards.css'

 const NewsCards=()=> {
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
   
    return (
        <div className="card-deck text-left mt-5" >
            
                {articles.slice(0,3).map(art=>{
                    return(
                        <div class="card mb-3" id="newsCard" >
                        <div class="row no-gutters">
                            <div>
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold "style={{fontFamily:'Mulish',fontSize:'18px'}}>{art.title}</h5>
                                <p class="card-text mt-3 text-secondary" style={{fontFamily:'Roboto',fontSize:'14px',cursor:'pointer'}}>
                                <ReadMoreReact text={art.excerpt}
                                    min={60}
                                    ideal={70}
                                    max={100}
                                    readMoreText="..Read more"
                                   />
                                </p>
                                <a class="card-text font-weight-bold"target="_blank" href={art.originalUrl}>View Article</a>
                                
                                <p class="card-text mt-2 "><small class="text-success">{art.publishedDateTime.substr(0,9)}</small></p>
                                                           
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    )
                })}
          
            </div>
    )
}
export default NewsCards;

