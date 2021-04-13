import { Container, Error, Close } from './style'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalEvents from '../../events/ModalEvents'

interface ModalErrorProps {
  message: string
}

export const ModalError: React.FC<ModalErrorProps> = ({message}) => {

  return (
    <Container>
      <Error>{message}</Error>
      <Close onClick={() => {ModalEvents.emit('currentError', undefined)}}>
        <FontAwesomeIcon icon={['fas', 'times']} />
      </Close>
    </Container>
  )
}

export default ModalError