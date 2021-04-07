import Head from 'next/head'
import { Container, Box } from '../styles/HomeStyle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
      <Container>
        <Head>
          <title>Principal</title>
        </Head>

        <Box>
          <div id="signIn" className="grow" color="blue">
            <FontAwesomeIcon icon={['fas', 'user']} />
            <p>SIGN IN</p>
          </div>
          <div id="signUp" className="grow" color="red">
          <FontAwesomeIcon icon={['fas', 'user-plus']} />
            <p>SIGN UP</p>
          </div>
        </Box>
      </Container>
  )
}
