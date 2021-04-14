import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container } from "./style"

import { IconName } from "@fortawesome/fontawesome-common-types"

interface PostButtonProps {
  content: string
  icon?: IconName
}

export const PostButton: React.FC<PostButtonProps> = ({ content, icon }) => {
  return (
    <Container>
      <FontAwesomeIcon icon={['fas', icon]} />
      <p>{content}</p>
    </Container>
  )
}

export default PostButton