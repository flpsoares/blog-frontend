import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  border: 1px solid var(--border);
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;

  div {
    display: flex;
    align-items: center;
  }
`

export const Photo = styled.img`
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
    transition: border-radius .3s;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
`

export const Name = styled.a`
  font-weight: 700;
  margin-left: 20px;
  text-decoration: none;
  color: var(--white);

  &:hover {
    text-decoration: underline;
  }
`

export const Content = styled.p`
  padding: 10px;
  font-weight: 500;
`
