import Head from 'next/head'

import CustomButton from '../components/CustomButton'
import { Post } from '../components/Post'
import PostButton from '../components/PostButton'
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
          <CustomButton content="Home" icon="home" />
          <CustomButton content="Profile" icon="user" />
          <CustomButton content="Home" icon="home" />
          <CustomButton content="Profile" icon="user" />
          <CustomButton content="Home" icon="home" />
          <CustomButton content="Profile" icon="user" />
          <CustomButton content="Home" icon="home" />
          <CustomButton content="Profile" icon="user" />
        </div>
        <div>
          <CustomButton content="Log out" icon="sign-out-alt" />
        </div>
      </Menu>
      <SubNavbar>
        <PostButton content="New post" icon="plus" />
      </SubNavbar>
      <Feed>
        <Post />
        <Post />
        {/* <Post />
        <Post />
        <Post /> */}
      </Feed>
      <Search>Search</Search>
    </Container>
  )
}