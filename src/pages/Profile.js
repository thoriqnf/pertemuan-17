import React from 'react'

export default function Profile(props) {
  return (
    <div>
      Profile Page
      <button onClick={props.handleLogout}>Logout</button>
    </div>
  )
}
