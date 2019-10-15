import React, { useState, useEffect, Fragment } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Home() {
  //
  // ─── THIS FETCH HAS TO BE OUTSIDE ───────────────────────────────────────────────
  //

  const [blogs, setblogs] = useState([])

  const fetchData = async () => {
    try {
      const res = await axios("https://jsonplaceholder.typicode.com/users")
      setblogs(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {blogs.map(blog => (
        <Fragment key={blog.id}>
          <h1>{blog.name}</h1>
          <Link to={`/${blog.id}`}>
            <button onClick={id => console.log(blog.id)}>READ</button>
          </Link>
        </Fragment>
      ))}
    </div>
  )
}
