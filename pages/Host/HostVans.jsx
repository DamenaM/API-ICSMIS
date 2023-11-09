import React from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/host/Graduats")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const hostVansEls = vans.map(emp => (
        <Link
            to={`/host/Graduats/${emp.studentNationalId}`}
            key={emp.studentNationalId}
            className="host-van-link-wrapper"
         >
            <div className="host-van-single" key={emp.studentNationalId}>
                <img src="../assets/images/user1.png" alt={`Photo of ${emp.studentNationalId}`} />
                <div className="host-van-info">
                <h3>{emp.studentFullName}</h3>
                    <p>University ={emp.institutionUni}</p>
                </div>
            </div>
            
        </Link>
    ))
    return (
     <section>
            <h1 className="host-vans-title">Click  listed Alumni Detail  </h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>
                    ) : (  <h2>Loading...</h2>  )
                }
            </div>
        </section>
        
    )
}