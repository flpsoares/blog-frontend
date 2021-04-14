import styled from 'styled-components'

export const Container = styled.div`
  overflow-y: hidden;
  width: 100%;
  min-height: 100vh;

  background-color: rgb(30, 30, 40);
  color: var(--white);

  display: grid;
  grid-template-columns: 20% 1fr 20%;
  grid-template-rows: 60px 50px 1fr;
  grid-template-areas: 
  'nav nav nav'
  'menu subnav search'
  'menu feed search';

`

export const Navbar = styled.div`
  grid-area: nav;
  background: #121214;
  border-bottom: 1px solid var(--border);

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 40px;
`

export const Welcome = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 18px;
    font-weight: 500;
    cursor: default;
    margin-right: 15px;
  }

  img {
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
    transition: border-radius .3s;
    cursor: pointer;

    &:hover {
      border-radius: 10px;
    }
  }
`
export const Menu = styled.div`
  grid-area: menu;
  border-right: 1px solid var(--border);

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`
export const SubNavbar = styled.div`
  grid-area: subnav;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const Feed = styled.div`
  grid-area: feed;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Search = styled.div`
  grid-area: search;
  border-left: 1px solid var(--border);
`