import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position :"absolute",
    top : "100vh",
    width:"100%",
    border:"2px solid red",
  }//ways to adding css in our react.
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      {/* part of bootstap css included */}
      <p className="text-center">
      copyrigth &copy; MyTodosList.com
      </p>
      
    </footer>
  )
}


