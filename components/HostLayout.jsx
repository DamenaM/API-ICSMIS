import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink
                    to="Graduats"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Graduates List 
                </NavLink>
              
            </nav>
            <Outlet />
        </>
    )
}