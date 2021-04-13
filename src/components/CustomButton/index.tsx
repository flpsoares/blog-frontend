import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container } from "./style"

import { IconName } from "@fortawesome/fontawesome-common-types"

interface CustomButtonProps {
  content: string
  icon?: IconName
}

export const CustomButton: React.FC<CustomButtonProps> = ({ content, icon }) => {
  return (
    <Container>
      <FontAwesomeIcon icon={['fas', icon]} />
      <p>{content}</p>
    </Container>
  )
}

export default CustomButton