import styled from 'styled-components'

export const CounterWrapper = styled.section`
  text-align: center;
`

export const Button = styled.button`
  font-size: 13px;
  font-weight: bold;

  display: inline-block;

  padding: 6px 12px;

  cursor: pointer;
  text-decoration: none;

  color: #351b41;
  border: none;
  background-color: ${props => (props.background ? props.background : "#302341")};

  &:active {
    position: relative;
    top: 1px;
  }
`
