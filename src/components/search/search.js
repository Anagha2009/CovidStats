import React from 'react'
import  {Link}  from 'react-router-dom';
// import emojiFlags from "emoji-flags"
import './search.css';



const Search=({countries,dash}) =>{
    
    const List = countries.sort( (a, b) => a.Country.toString().localeCompare(b.Country))
    const handleClick= (e)=>{
     const slug = e.target.value
    //  const iso = e.target.name
    //  console.log(slug)
     localStorage.setItem('slug', slug);
    }
    
    const searchPage =()=>{
        window.location.reload()
    }
    
    return (
        <div style={dash ?{display:'flex'}:null}>
            
          <select onChange={handleClick}className={dash ? "form-control form-control-md": "form-control form-control-lg"}>
                <option style={{borderTop:'1px solid black'}}>
                   Select a country
                </option>

               {List.map(country =>{
                // const code= emojiFlags.countryCode(country.ISO2);
                // console.log(code)
                return(
                           
                           <option key={country.Country} value ={country.Country} name={country.Country}>
                               {country.Country} ({country.ISO2}) 
                            </option>

                            
                            
                         )
                     })}
              
            </select>
            {!dash ? (
            <Link to = '/dashboard'>
            <button type="button" className="btn-lg mt-4 btn-warning style-btn" >
            <strong>Get Stats</strong>
           </button>
           </Link> )
           :(
           <Link to = '/dashboard'>
           <button type="button" className="btn btn-warning ml-2 mr-4" onClick={searchPage} >
           <strong><i className="fas fa-search"></i></strong>
          </button>
          </Link> )}
         </div>
          
        
    )
}

export default Search;
