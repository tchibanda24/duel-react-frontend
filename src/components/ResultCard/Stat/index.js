import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  & > * {
    display: flex;
    width: 50%;
    margin: 2px;
  }

  span:first-child {
    justify-content: flex-start;
  }

  span:last-child {
    justify-content: flex-end;
  }
`

const Stat = ({ label, value }) => (
  <Wrapper>
    <span>{label}</span>
    <span>{value}</span>
  </Wrapper>
)

export default Stat
