import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostGratuCgpa() {
    const { currentGraduates } = useOutletContext()
    return (
        <h3 className="host-van-price">obtained CGPA Grade=<span> {currentGraduates.cgpa}</span></h3>
        
    )
}