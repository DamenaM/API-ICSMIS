import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostGraduatesInst() {
    const { currentGraduates } = useOutletContext()
    return (
        <h3 className="host-van-price">{currentGraduates.institutionName}</h3>
    )
}