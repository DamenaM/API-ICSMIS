import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const { currentGraduates } = useOutletContext()
    return (
        <img src={currentGraduates.imageUrl} className="host-van-detail-image" />
    )
}