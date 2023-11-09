import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>Employee educational document accesses center .</h1>
            <p>This system work only organization HR officer to employee educational document accesses center</p>
            <Link to="GraduatsFilter">Find your Employee</Link>
        </div>
    )
};