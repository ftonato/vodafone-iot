import styled from 'styled-components'

export const CardWrapper = styled.div`
  max-width: 320px;
  margin: 0 auto;
  text-align: center;
  transition: all .3s;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`
export const Card = styled.div`
  font-family: 'Source Code Pro';
  font-size: 16px;

  position: relative;

  display: inline-block;

  box-sizing: border-box;
  width: 96%;
  height: 270px;
  margin-bottom: 50px;
  padding: 30px;

  vertical-align: middle;

  color: #fff;
  border-radius: 20px;
  background: #302341;
  background: linear-gradient(90deg, rgba(48, 35, 65, 1) 0%, rgba(55, 24, 65, 1) 100%);
  box-shadow: 0 2px 12px rgba(0, 0, 0, .7);
  text-shadow: 0 1px 1px rgba(0, 0, 0, .6);

  @media (min-width: 768px) {
    max-width: 420px;
  }
`

export const CardOwner = styled.div`
  text-align: left;
`
export const CardNumber = styled.div`
  font-size: 30px;

  padding: 52.5px 0;

  text-align: center;
`
export const CardMessage = styled.div`
  font-size: 14px;
  font-weight: bold;

  position: relative;

  transition: all .3s;
  text-align: center;
  text-decoration: dashed;

  color: #e65e6a;

  &:after {
    position: absolute;
    top: -1em;
    right: -1em;
    bottom: -1em;
    left: -1em;

    content: '';

    border: 2px dashed #e65e6a;
  }
`
