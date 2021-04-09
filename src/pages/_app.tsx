import { GlobalStyle } from "../../GlobalStyle"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faUserPlus, faEye, faEyeSlash, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faUserPlus, faEye, faEyeSlash, faLongArrowAltRight)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
