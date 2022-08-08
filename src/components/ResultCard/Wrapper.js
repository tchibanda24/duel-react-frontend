import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
  background-color: #fff;
  border: 5px solid #937b63;
  border-radius: 5%;
  box-shadow: 0 10px 20px rgba(147, 123, 99, 0.25),
    0 6px 6px rgba(147, 123, 99, 0.25);
  color: #937b63;
  justify-content: center;
  padding: 40px 20px;
  width: 450px;
  
  > img {
    padding: 10px 0px;
    width: 350px;
    border-style: none;
  }
  
  > span {
    max-width: 80%;
    text-align: center;
  }
  
  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

export default Wrapper