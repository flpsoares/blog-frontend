import styled from 'styled-components'

export const Container = styled.div`
  background-color: #EF5350;
  width: 100%;
  border-radius: 5px;
  padding: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Error = styled.p`
  font-size: 20px;
`

export const Close = styled.button`
  color: white;
  font-size: 20px;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`