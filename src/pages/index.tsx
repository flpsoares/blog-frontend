import { useState } from 'react'

import Head from 'next/head'

import { Container, Box, Form, FormTitle, Info, Content, Input, InputWithIcon, InputButton, ForgotPassword } from '../styles/HomeStyle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {

  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  
  const openLogin = () => {
    setLogin(true)
    setRegister(false)
  }

  const mostrarSenha = () => {
    setShowPassword(!showPassword)
    console.log(showPassword)
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
                        type={`${showPassword ? 'text' : 'password'}`} 
                        placeholder="Password" 
                      />
                      {
                        showPassword ? 
                          <FontAwesomeIcon 
                            onClick={mostrarSenha} 
                            icon={['fas', 'eye-slash']} 
                          />
                        :
                          <FontAwesomeIcon 
                            onClick={mostrarSenha} 
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
                  <Content>
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <InputWithIcon>
                      <Input 
                        type={`${showPassword ? 'text' : 'password'}`} 
                        placeholder="Password" 
                      />
                      {
                        showPassword ? 
                          <FontAwesomeIcon 
                            onClick={mostrarSenha} 
                            icon={['fas', 'eye-slash']} 
                          />
                        :
                          <FontAwesomeIcon 
                            onClick={mostrarSenha} 
                            icon={['fas', 'eye']} 
                          />
                      }
                    </InputWithIcon>
                    <InputWithIcon>
                      <Input 
                        type={`${showPassword ? 'text' : 'password'}`} 
                        placeholder="Confirm Password" 
                      />
                      {
                        showPassword ? 
                          <FontAwesomeIcon 
                            onClick={mostrarSenha} 
                            icon={['fas', 'eye-slash']} 
                          />
                        :
                          <FontAwesomeIcon 
                            onClick={mostrarSenha} 
                            icon={['fas', 'eye']} 
                          />
                      }
                    </InputWithIcon>
                    <ForgotPassword>
                      <InputButton>
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
