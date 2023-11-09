import React from "react"
import { useParams,Link } from "react-router-dom"


export default function GraduatesAtuh() {
    const params = useParams()
    const [emp, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/Graduats/${params.studentNationalId}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.studentNationalId])

    return (
        <div className="van-detail-container">
            {emp ? (
                <div className="van-detail">
                    <img src="../assets/images/user1.png" />
                    <Link  to=".."   relative="path"    className="back-button"
                         >&larr; <span>Back to Alumni </span>
                    </Link>
                   <ui>
                    <li className="van-price"><span>Name :- {emp.studentFullName}</span></li>
                    <li> CGA:-  {emp.cgpa}</li>
                    <li> {emp.institutionName}</li>
                    <button className="link-button">Need Authenticate</button>
                   </ui>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
        
    )
}