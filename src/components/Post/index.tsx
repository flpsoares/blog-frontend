import { Container, Photo, Name, Content } from "./style"

export const Post: React.FC = () => {
  return (
    <Container>
      <div>
        <Photo src="/assets/profile2.jpg" alt="Neymar brabo" />
        <Name href="">Neymar brabo</Name>
      </div>
      <Content>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Quas incidunt, expedita adipisci, repellendus porro excepturi
        vel magni, veniam laudantium ipsum molestiae voluptas eaque 
        amet consectetur labore quis inventore rerum odio.
      </Content>
    </Container>
  )
}