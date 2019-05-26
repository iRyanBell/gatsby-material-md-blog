import React from 'react'
import { rhythm } from '../utils/typography'
import Nav from './Nav'
import Footer from './Footer'

class Layout extends React.Component {
  render() {
    const { children } = this.props
  
    return (
      <main>
        <Nav />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: rhythm(36),
            padding: `${rhythm(3 / 2)} ${rhythm(3 / 4)}`,
          }}
        >
          {children}
        </div>
        <Footer />
      </main>
    )
  }
}

export default Layout
