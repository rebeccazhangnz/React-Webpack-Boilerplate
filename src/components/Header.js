import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.heading}</h1>
        <h3>{this.props.description}</h3>
      </div>
    )
  }
}

export default Header
