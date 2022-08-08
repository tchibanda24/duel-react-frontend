import styled from 'styled-components'

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 90%;
  
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  
  > span {
    display: flex;
    justify-content: center;
    margin: 24px 0;
    height: 60px;
    font-size: 56px;
    color: #111;
    font-family: 'Helvetica Neue', sans-serif;
    letter-spacing: 2px;
    line-height: 1;
  }
  
  > hr {
    margin: 0 24px;
    border-color: #555555;
    background-color: #555555;
    color: #555555;
  }
`

export default Wrapper