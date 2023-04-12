import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function JsonServer() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3031/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))

    },[] )
  return (
    <div className='container mt-5'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Sr.no</th>
                    <th>Receiver Name</th>
                    <th>Company Name</th>
                    <th>Email ID</th>
                    <th>Mobile No</th>
                    <th>Place</th>
                </tr>
            </thead>
            <tbody>
               {data.map((d, i) => {
                return <tr key={i}>
                    <td>{d.Srno}</td>
                    <td>{d.ReceiverName}</td>
                    <td>{d.CompanyName}</td>
                    <td>{d.EmailId}</td>
                    <td>{d.MobileNo}</td>
                    <td>{d.Place}</td>
                </tr>
               })} 
            </tbody>


        </table>
    </div>
  )
}
