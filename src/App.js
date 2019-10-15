import React, { useState, useEffect, Fragment } from "react"
import axios from "axios"
import "./App.css"

function App() {
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
    <div className="App">
      {blogs.map(blog => (
        <Fragment key={blog.id}>
          <h1>{blog.name}</h1>
        </Fragment>
      ))}
    </div>
  )
}

export default App
