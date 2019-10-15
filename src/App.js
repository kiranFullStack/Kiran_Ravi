import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Category1 from "./pages/Category1"
import Category2 from "./pages/Category2"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import BlogPage from "./pages/BlogPage"

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cat-1">
          <Category1 />
        </Route>
        <Route path="/cat-2">
          <Category2 />
        </Route>
        <Route exact path="/:id">
          <BlogPage />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
