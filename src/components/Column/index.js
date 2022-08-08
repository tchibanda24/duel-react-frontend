import styled from 'styled-components'
import PropTypes from 'prop-types'

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  margin: ${({ margin }) => margin};
`

const flexTypes = ['center', 'flex-start', 'flex-end', 'space-between', 'space-around']

Column.defaultProps = {
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
}

Column.propTypes = {
  justifyContent: PropTypes.oneOf(flexTypes),
  alignItems: PropTypes.oneOf(flexTypes),
  margin: PropTypes.string
}

export default Column
