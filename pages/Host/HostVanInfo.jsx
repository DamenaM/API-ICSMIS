import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const { currentGraduates } = useOutletContext()
    
    return (
        <section className="host-van-detail-info">
            <h4>student National Id: <span>{currentGraduates.studentNationalId}</span></h4>
            <h4>studentFull Name: <span>{currentGraduates.studentFullName}</span></h4>
            <h4>year Of_Graduation: <span>{currentGraduates.yearOfGraduation}</span></h4>
            <h4>EndDate: <span>{currentGraduates.endDate}</span></h4>
            <h4>institution Name: <span>{currentGraduates.institutionName}</span></h4>
            <h4>studyProgram: <span>{currentGraduates.studyProgram}</span></h4>
           
            <h4>Qualification: <span>{currentGraduates.qualification}</span></h4>
            <h4>Visibility: <span>is Accredited</span></h4>
            <h4>is Accredited: <span>{currentGraduates.isAccredited}</span></h4>
           
        </section>
    )
}