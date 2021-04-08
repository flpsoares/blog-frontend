import { useState } from 'react'

import Head from 'next/head'

import { Container, Box } from '../styles/HomeStyle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {

  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)

  const openLogin = () => {
    setLogin(true)
    setRegister(false)
  }

  const openRegister = () => {
    setRegister(true)
    setLogin(false)
  }

  return (
      <Container>
        <Head>
          <title>Principal</title>
        </Head>

        <Box>
          <div id="signIn" className={`grow ${login ? 'active' : 'desactive'}`} onClick={openLogin}>
            {
              login ? 
                <>
                  
                </>
              :
                <>
                  <FontAwesomeIcon icon={['fas', 'user']} />
                  <p>SIGN IN</p>
                </>
            }
          </div>
          <div id="signUp" className={`grow ${register ? 'active' : 'desactive'}`} onClick={openRegister}>
            {
              register ? 
                <>
                  
                </>
              :
                <>
                  <FontAwesomeIcon icon={['fas', 'user-plus']} />
                  <p>SIGN UP</p>
                </>
            }
          </div>
        </Box>
      </Container>
  )
}
