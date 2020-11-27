// import React,{useEffect, useState} from 'react'
// import Sidebar from '../components/sidebar/sidebar';
// import Statistics from './statistics'
// import axios from 'axios';

// const Global=() =>{
//     const [result,setResult]=useState([]);
//     useEffect(() => {
//         // const slugName = localStorage.getItem('slug');
//         axios.get(`https://api.covid19api.com/summary`)
//          .then(res =>{
//              setResult(res.data);
//             //  console.log(result)
//          })
//          .catch(err=>{
//             console.log(err)
//         })
//     }, [])
//     return (
//         <div>
//             <div className="row">
//                 <div className="col-lg-2" style={{padding:0,margin:0}}>
//                 <Sidebar/>
//                 </div>
//                 <div className="col-lg-10" style={{padding:0,margin:0}}>
//                  {/* <Statistics result ={result} global/> */}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Global;
