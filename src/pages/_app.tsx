import { GlobalStyle } from "../../GlobalStyle"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faUser, faUserPlus)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
