// import React,{useState,useEffect} from 'react'
// import axios from 'axios';
// import {getCode} from 'country-list';

// const Table=()=> {
//     const [province,setProvince]=useState([]);
//     useEffect(() => {
//         const slugName = localStorage.getItem('slug');
//         console.log(slugName)
//         const code= getCode(slugName)
//         console.log(code)
//         const options = {
//             method: 'GET',
//             url: `https://rapidapi.p.rapidapi.com/stats/v1/${code}/`,
//             headers: {
//               'x-rapidapi-key': '06c8ca8549msh7d544746656b576p1712c2jsn369cb4e27e92',
//               'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com'
//             }
//           };
          
//           axios.request(options).then(function (response) {
//               setProvince(response.data)
//               console.log(response.data);
//           }).catch(function (error) {
//               console.error(error);
//           });
//     }, [])
//     return (
//         <div>
            
//         </div>
//     )
// }
// export default Table;
