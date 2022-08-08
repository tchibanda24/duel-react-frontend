import React from 'react'
import Wrapper from './Wrapper'

const Layout = Component => props => (
  <Wrapper>
    <Component {...props} />
  </Wrapper>
)

export default Layout
