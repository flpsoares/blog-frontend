import { useState, useRef } from 'react'

import { useAxiosError } from '../hooks/useAxiosError'

import Head from 'next/head'

import api from '../api/api'

import { Container, Box, Form, FormTitle, Info, Content, Input, InputWithIcon, InputButton, ForgotPassword } from '../styles/HomeStyle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ModalError } from '../components/ModalError'
import ModalEvents from '../events/ModalEvents'

export default function Home() {

  const { message } = useAxiosError()

  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)

  const usernameRef = useRef<HTMLInputElement>()
  const emailRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()

  const openLogin = () => {
    setLogin(true)
    setRegister(false)
  }

  const showPassword = () => {
    setPasswordVisible(!passwordVisible)
    console.log(passwordVisible)
  }

  const openRegister = () => {
    setRegister(true)
    setLogin(false)
  }

  const handleSignUp = async (e) => {
    e.preventDefault()

    ModalEvents.emit('currentError', undefined)

    await api.post('/user', {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    })
  }

  return (
      <Container>
        <Head>
          <title>Principal</title>
        </Head>

        <Box>
          <div 
            id="signIn" 
            className={`grow ${login ? 'active' : 'desactive'}`} 
            onClick={openLogin}
          >
            {
              login ? 
              <>
                <Form>
                  <FormTitle>SIGN IN</FormTitle>
                  <Content>
                    <Input placeholder="Username" />
                    <InputWithIcon>
                      <Input 
                        type={`${passwordVisible ? 'text' : 'password'}`} 
                        placeholder="Password" 
                      />
                      {
                        passwordVisible ? 
                          <FontAwesomeIcon 
                            onClick={showPassword} 
                            icon={['fas', 'eye-slash']} 
                          />
                        :
                          <FontAwesomeIcon 
                            onClick={showPassword} 
                            icon={['fas', 'eye']} 
                          />
                      }
                    </InputWithIcon>
                    <ForgotPassword>
                      <a>
                        Forgot password?
                      </a>
                      <InputButton>
                        <FontAwesomeIcon 
                          icon={['fas', 'long-arrow-alt-right']} 
                        />
                      </InputButton>
                    </ForgotPassword>
                  </Content>
                </Form>
              </>
              :
                <Info>
                  <FontAwesomeIcon icon={['fas', 'user']} />
                  <p>SIGN IN</p>
                </Info>
            }
          </div>
          <div 
            id="signUp" 
            className={`grow ${register ? 'active' : 'desactive'}`} 
            onClick={openRegister}
          >
            {
              register ? 
                <Form>
                  <FormTitle>SIGN UP</FormTitle>
                  {
                    message && <ModalError message={message} />
                  }
                  <Content>
                    <Input ref={usernameRef} placeholder="Username" />
                    <Input ref={emailRef} placeholder="Email" />
                    <InputWithIcon>
                      <Input
                        ref={passwordRef} 
                        type={`${passwordVisible ? 'text' : 'password'}`} 
                        placeholder="Password" 
                      />
                      {
                        passwordVisible ? 
                          <FontAwesomeIcon 
                            onClick={showPassword} 
                            icon={['fas', 'eye-slash']} 
                          />
                        :
                          <FontAwesomeIcon 
                            onClick={showPassword} 
                            icon={['fas', 'eye']} 
                          />
                      }
                    </InputWithIcon>
                    <InputWithIcon>
                      <Input 
                        type={`${passwordVisible ? 'text' : 'password'}`} 
                        placeholder="Confirm Password" 
                      />
                      {
                        passwordVisible ? 
                          <FontAwesomeIcon 
                            onClick={showPassword} 
                            icon={['fas', 'eye-slash']} 
                          />
                        :
                          <FontAwesomeIcon 
                            onClick={showPassword} 
                            icon={['fas', 'eye']} 
                          />
                      }
                    </InputWithIcon>
                    <ForgotPassword>
                      <InputButton onClick={handleSignUp}>
                        <FontAwesomeIcon 
                          icon={['fas', 'long-arrow-alt-right']} 
                        />
                      </InputButton>
                    </ForgotPassword>
                  </Content>
                </Form>
              :
                <Info>
                  <FontAwesomeIcon icon={['fas', 'user-plus']} />
                  <p>SIGN UP</p>
                </Info>
            }
          </div>
        </Box>
      </Container>
  )
}
