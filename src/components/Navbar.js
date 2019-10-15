import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      |.......|
      <Link to="/cat-1">Cat 1</Link>
      <Link to="/cat-2">Cat 2</Link>
      |.......|
      <Link to="/2018">2018</Link>
      <Link to="/2017">2017</Link>
    </nav>
  )
}
