import React, { Component } from 'react'
import styled from 'styled-components'

import Card from '../../components/Card'
import TextButton from '../../components/TextButton'
import Column from '../../components/Column'

const HomeContent = styled(Column)`
  @media (min-width: 650px) {
    flex-direction: row;
  }
`

class Home extends Component {
  state = {
    buttons: [
      {
        text: 'Judge someone\'s competence',
        buttonText: 'inspect',
        background: '#000',
        to: '/inspect'
      },
      {
        text: 'Ultimate test of developer egos',
        buttonText: 'duel',
        background: 'red',
        to: '/duel'
      }
    ]
  }

  render () {
    const { buttons } = this.state
    return (
      <Card title='dev-duel'>
        <HomeContent justifyContent='space-around' margin='20px'>
          {buttons.map((button, idx) => (
            <TextButton key={idx} {...button} />
          ))}
        </HomeContent>
      </Card>
    )
  }
}

export default Home
