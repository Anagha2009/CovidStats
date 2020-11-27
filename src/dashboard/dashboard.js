import React,{useEffect, useState} from 'react'
import Sidebar from '../components/sidebar/sidebar';
import Statistics from './statistics'
import axios from 'axios';

const Dashboard=() =>{
    const [loading, setloading]=useState(true)

    const [result,setResult]=useState([]);
    useEffect(() => {
        const slugName = localStorage.getItem('slug');
        axios.get(`https://api.covid19api.com/total/country/${slugName}`)
         .then(res =>{
            setloading(false);
             setResult(res.data);
         })
         .catch(err=>{
            console.log(err)
        })
    }, [])
    return (
        <div>
            {!loading ?(
            <div className="row">
                <div className="col-lg-2" style={{padding:0,margin:0}}>
                <Sidebar/>
                </div>
                <div className="col-lg-10" style={{padding:0,margin:0}}>
                 <Statistics result ={result}/>
                </div>
            </div>
             ):
             (
                 <div style={{position:'relative',top:"400px"}}>
                     <div class="spinner-border text-primary" role="status">
                         <span class="sr-only">Loading...</span>
                         </div>
 
                         <div class="spinner-border text-success" role="status">
                         <span class="sr-only">Loading...</span>
                         </div>
                         <div class="spinner-border text-danger" role="status">
                         <span class="sr-only">Loading...</span>
                         </div>
                 </div>
             )}
        </div>
    )
}
export default Dashboard;
