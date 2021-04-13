import styled from "styled-components";

export const Container = styled.button`
  color: var(--white);

  display: flex;
  align-items: center;

  font-size: 20px;
  margin: 7px 0;
  width: 80%;
  padding: 10px;
  border-radius: 20px;
  font-weight: 800;
  transition: 0.4s;

  p {
    margin-left: 20px;
  }

  &:hover {
    color: var(--secondary);
    background: rgba(128, 78, 239, 0.1);
  }
`