import React from 'react'
import Sidebar from '../components/sidebar/sidebar'
import '../components/sidebar/sidebar.css'
import wash from '../images/undraw_wash_hands_nwl2.svg'
import mask from '../images/undraw_medical_care_movn.svg'
import social from '../images/undraw_social_distancing_2g0u.svg'
import NewsCards from '../components/cards/newsCards'

const Precautions=() =>{
    return (
    <div className="row">
        <div className="col-lg-2" style={{padding:0,margin:0}}>
            <Sidebar/>
        </div>
        <div className="col-lg-10" style={{padding:0,margin:0,backgroundColor:'#EEF2FB'}}>
            <h1 className="text-uppercase text-monospace mt-5 "style={{color:"#FF8E3C",fontFamily:'Mulish'}}>Precautionary measures for COVID-19</h1>
            <p className="container mt-4" style={{lineHeight:'30px',color:'#001E1D', fontSize:'14px'}}>Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local health authority.<br/>
            Calling in advance allows your healthcare provider to quickly direct you to the right health facility. This protects you, and prevents the spread of viruses and other infections.</p>      
            <p style={{fontSize:'small'}}>Read more from<a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank"> WHO guidelines</a></p>
            
            <hr className="m-5"></hr>
            
            <div className="container" style={{marginTop:'90px'}}>
            <h5 className=" mt-5" style={{color:"#045769",fontFamily:'Mulish',textTransform:'uppercase',textAlign:'left',fontWeight:'bold'}}>Sanitise/Wash your hands</h5>
            <div className="row">
                <div className="col">
                    <ul style={{fontFamily:'Roboto',textAlign:"left",lineHeight:'30px',fontSize:'15px'}}>
                        <li className="mt-3">Clean your hands often. Use soap and water,<br/> or an alcohol-based hand rub.</li>
                        <li className="mt-3">Cover coughs and sneezes with a tissue,<br></br> throw the tissue away, and then wash their <br/>hands right away. Wash with soap and <br/>water for at least 20 seconds,</li>
                        <li className="mt-3">Don’t touch your eyes, nose or mouth.</li>

                    </ul>
                </div>
                <div className="col">
                    <img src={wash}width="627" height="330" alt="wash hands"/>
                </div>
            </div>
            </div>
            
            
            <div className="container" style={{marginTop:'70px'}}>
            <div className="row">
               
                <div className="col">
                    <img src={mask}width="350" height="330" alt="wash hands"/>
                </div>
                <div className="col">
            <h5 className=" mt-5" style={{color:"#045769",fontFamily:'Mulish',textTransform:'uppercase',textAlign:'left',fontWeight:'bold'}}>Wear your mask</h5>

                    <ul style={{fontFamily:'Roboto',textAlign:"left",lineHeight:'30px',fontSize:'15px'}}>
                        <li className="mt-3">Wear a mask.Save lives.</li>
                        <li className="mt-3">Wear a mask when physical distancing is not possible.<br/>Masks can help prevent the spread of the virus from the person <br/>wearing the mask to others.</li>
                        <li className="mt-3">Continue to keep about 6 feet between yourself and others.<br/> The mask is not a substitute for social distancing.</li>

                    </ul>
                </div>
            </div>
            </div>


            <div className="container" style={{marginTop:'150px'}}>
            <h5 className=" mt-5" style={{color:"#045769",fontFamily:'Mulish',textTransform:'uppercase',textAlign:'left',fontWeight:'bold'}}>Practise social distancing</h5>
            <div className="row">
                <div className="col">
                    <ul style={{fontFamily:'Roboto',textAlign:"left",lineHeight:'30px',fontSize:'15px'}}>
                        <li className="mt-3">Stay at least 6 feet away from other people.
                           <br/> Maintain a safe distance from anyone who is coughing or sneezing.</li>
                        <li className="mt-3">Stay home if you feel unwell.</li>
                        <li className="mt-3">Since the disease spreads from person to person through the <br/> liquid droplets that are sprayed when someone sneezes or coughs,<br/>  avoid going to crowded places.</li>

                    </ul>
                </div>
                <div className="col">
                    <img src={social}width="427" height="300" alt="wash hands"/>
                </div>
            </div>
            </div>
            
            <div id ="news"className="container">
            <h5 className=" text-left text-uppercase mt-5 font-weight-bolder" style={{color:'#045769',fontSize:'larger'}}>Stay Aware</h5>
            <NewsCards/>
            </div>

            <p className="text-black text-monospace mt-5">Stay home.Stay safe</p>


        </div>

    </div>
            
      
    )
}
export default Precautions;
