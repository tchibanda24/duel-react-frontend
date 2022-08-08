import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Input from '../Input'
import Button from '../Button'

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  & input {
    margin: 4px 4px;
  }
  & > * {
    margin: 8px auto;
  }
`

const handleFormSubmit = e => {
  e.preventDefault()
  document.getElementById('submit').click()
}

const Form = ({ inputs, button, changed, clicked }) => (
  <Wrapper onSubmit={handleFormSubmit}>
    {Array.isArray(inputs) ? (
      <div>
        {inputs.map((input, index) => (
          <Input
            key={index}
            type='text'
            placeholder='username'
            value={input.value}
            onChange={changed}
            name={input.name}
          />
        ))}
      </div>
    ) : (
      <Input
        type='text'
        placeholder='username'
        value={inputs.value}
        name={inputs.name}
        onChange={changed}
      />
    )}
    <Button id='submit' {...button} onClick={clicked}>
      {button.text}
    </Button>
  </Wrapper>
)

Form.propTypes = {
  inputs: PropTypes.any,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired
  }),
  changed: PropTypes.func.isRequired,
  clicked: PropTypes.func.isRequired
}

export default Form
