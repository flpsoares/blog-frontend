import Head from 'next/head'

import CustomButton from '../components/CustomButton'
import { Container, Feed, Menu, Navbar, Search, SubNavbar, Welcome } from '../styles/MainStyle'

export default function Main() {
  return (
    <Container>
      <Head>
        <title>Main</title>
      </Head>
      <Navbar>
        <Welcome>
          <p>Bem vindo(a) username</p>
          <img src="/assets/profile2.jpg" alt="Foto de perfil"/>
        </Welcome>
      </Navbar>
      <Menu>
        <div>
          <CustomButton content="Home" icon="home" />
          <CustomButton content="Profile" icon="user" />
        </div>
        <div>
          <CustomButton content="Log out" icon="sign-out-alt" />
        </div>
      </Menu>
      <SubNavbar>
        SubNavbar
      </SubNavbar>
      <Feed>Feed</Feed>
      <Search>Search</Search>
    </Container>
  )
}