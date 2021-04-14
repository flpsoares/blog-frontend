import styled from "styled-components";

export const Container = styled.button`
  color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  margin: 7px 0;
  width: 80%;
  padding: 10px;
  font-weight: 800;
  transition: 0.4s;

  p {
    margin-left: 20px;
  }

  &:hover {
    color: white;
  }
`