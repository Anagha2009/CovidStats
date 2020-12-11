import React from 'react'
import Present from './Present';
import './cards.css';

const Cards=({result})=> {
    var last = result.slice(-1)
    // console.log(last)
    var increase=result.slice(-2,-1)
    var active =increase.map(incr => incr.Active)
    var Rec =increase.map(incr => incr.Recovered)
    var death =increase.map(incr => incr.Deaths)
    var confirm =increase.map(incr => incr.Confirmed)

    return (
        <div>
        <div className="container">
            <div className="card-deck w-100 mt-5 ">
                <div className='card border border-primary'id="primary">
                    <div className="card-body text-primary">
                        <h5 className="card-title text-left text-uppercase text-monospace">Active cases</h5>
                        {last.map(data=>{
                            return(
                                <div key={data.id}>
                                     <p className="card-text text-left font-weight-bolder" id="numbers">{data.Active}</p>
                                     <p className="card-text text-left">{data.Active-active > 0 ?'+':''}{data.Active-active}</p>
                                </div>
                         )
                        })}
   
                    </div>
                 </div>
                 <div className="card border border-success" id="success">
                 <div className="card-body text-success">
                        <h5 className="card-title text-left text-uppercase text-monospace">Recovered Cases</h5>
                        {last.map(data=>{
                            return(
                                <div key={data.id}>
                                    <p className="card-text text-left font-weight-bolder" id="numbers">{data.Recovered}</p>
                                    <p className="card-text text-left">{ data.Recovered-Rec > 0 ?'+':'-'}{data.Recovered-Rec}</p>
                                </div>
                           )
                        })}
                    </div>
                 </div>
                 <div className="card border border-danger "id="danger">
                 <div className="card-body text-danger">
                        <h5 className="card-title text-left text-uppercase text-monospace">Deceased cases</h5>
                        {last.map(data=>{
                            return(
                                <div key={data.id}>
                                    <p className="card-text text-left font-weight-bolder" id="numbers">{data.Deaths}</p>
                                     <p className="card-text text-left">
                                     { data.Deaths-death >0 ?'+':''} { data.Deaths-death}
                                    </p>
                                </div>
                         )
                        })}
                    </div>
                 </div>
                 <div className="card border border-dark" id="dark">
                 <div className="card-body text-dark">
                        <h5 className="card-title text-left text-uppercase text-monospace">Total cases</h5>
                        {last.map(data=>{
                            return(
                                <div key={data.id}>
                                    <p className="card-text text-left font-weight-bolder" id="numbers">{data.Confirmed}</p>
                                     
                                </div>
                         )
                        })}
                    </div>
                 </div>
            </div>
        </div>
             <div id="present" className="container" style={{marginTop:70}}>
                <h5 className=" text-left text-uppercase font-weight-bolder" style={{color:'#045769',fontSize:'larger'}}>Present day Stats</h5>
            </div>
            <Present c={confirm} r={Rec} d={death} last={last}/>           
        </div>
        
    )
}
export default Cards;
