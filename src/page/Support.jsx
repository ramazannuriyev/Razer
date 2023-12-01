import React from 'react'
import '../assets/scss/components/Support.scss'

const Support = () => {
  return (
    <>
      <div className="support-body">
        <div className="welcome d-flex flex-column justify-content-center align-items-center">
          <div className="welcome-title pt-4"><h3>Welcome to Razer Support</h3></div>
          <div className="welcome-text pt-4"><p> We’re here to help</p></div>
          <div className="welcome-input pt-4"><input type="text" placeholder='Search Support (e.g.Blade pro)'/></div>
        </div>
      </div>

    </>
  )
}

export default Support