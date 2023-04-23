import React from 'react'
import PropTypes from 'prop-types'//impt
export default function Header(props) {//props are the javascript object that we are passing from parent to child components//here we can import My todos List from props directly.by help of using Headre({title})//this method of directly importing is called as destructuring
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          <a className="nav-link" href="#">About</a>
        </div>
      </div>
    </div>
  </nav>
  )
}
Header.defaultProps={
  title:"Your Title Here",
  // searchBar:true//its a default value
}
Header.propTypes = {
  title:PropTypes.string//;is the object symbol so we are not using it
  // searchBar:PropTypes.bool.isRequired//so here is the case of searchbar and its type is boolean and is required
}
