import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from '../../components/Card'
import Form from '../../components/Form'
import Column from '../../components/Column'
import ResultCard from '../../components/ResultCard'
import { getUsersAsync, resetUsers } from '../../ducks/user.duck'

class Duel extends Component {
  state = {
    inputs: [{ name: 'left', value: '' }, { name: 'right', value: '' }]
  }

  componentDidMount () {
    this.props.resetUsers()
  }

  handleInputChanged = event => {
    const { target } = event
    this.setState(prevState => ({
      ...prevState,
      inputs: prevState.inputs.map(input => input.name === target.name ? { ...input, value: target.value } : input)
    }))
  }

  handleButtonClicked = () => {
    const values = this.state.inputs.map(input => input.value).filter(val => val)
    if (values.length) {
      console.log(`Values: ${values}`)
      this.props.getUsers(values)
    }
  }

  render () {
    const { users, error, loading } = this.props
    return (
      <Card title='duel'>
        <Column alignItems='center' margin='24px 0'>
          <Column>
            <Form
              inputs={this.state.inputs}
              button={{
                background: 'red',
                size: 'small',
                text: 'duel'
              }}
              changed={this.handleInputChanged}
              clicked={this.handleButtonClicked}
            />
          </Column>
          <Column alignItems='center'>
            {loading ? <span>loading...</span> : undefined}
            {users.map(user => <ResultCard key={user.username} user={user}/>)}
            {error ? <span>{error.message}</span> : undefined}
          </Column>
        </Column>
      </Card>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  ...user
})

const mapDispatchToProps = dispatch => ({
  getUsers: (usernames) => dispatch(getUsersAsync(usernames)),
  resetUsers: () => dispatch(resetUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Duel)
