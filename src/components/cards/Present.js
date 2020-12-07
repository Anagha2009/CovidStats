import React from 'react'
import PresentChart from '../charts/presentChart';
const Present=({d,c,r,last}) =>{
    const con=last.map(l=>l.Confirmed)
    const ded=last.map(l=>l.Deaths)
    const reco=last.map(l=>l.Recovered)

    return (
        <div className="container mt-5" style={{fontFamily:'Mulish'}}>
            <div className="row">
                <div className="col-5">
                    <table className="table table-bordered table-warning text-left">
                    <thead>
                        <tr style={{color:'grey'}}>
                            <th>Case Type</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tr>
                        <th style={{color:'#000000'}}>Confirmed</th>
                        <td>{last.map(data=>{
                            return(
                                <div key={data.id}>
                                    <p>{data.Confirmed -c}</p>
                                </div>
                           )
                        })}</td>
                    </tr>
                    <tr>
                        <th style={{color:'#739870'}}>Recovered</th>
                        <td>{last.map(data=>{
                            return(
                                <div key={data.id}>
                                    <p>{data.Recovered - r}</p>
                                </div>
                           )
                        })}</td>
                    </tr>
                    <tr>
                        <th style={{color:'#B60000'}}>Deaths</th>
                        <td>{last.map(data=>{
                            return(
                                <div key={data.id}>
                                    <p>{data.Deaths - d}</p>
                                </div>
                           )
                        })}</td>
                    </tr>
                    </table>
                </div>
                <div className="col-7">
                 <PresentChart con={con -c } dead={ded -d} reco={reco -r} last={last}/>
                </div>
            </div>
        </div>
    )
}

export default Present
