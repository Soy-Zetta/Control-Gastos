import styled from "styled-components";
import {Btnsave} from "../../index";
export function LoginTemplate() {
  return (
    <Container>
      
      <div>
        <span>version 1.0</span>
        <div>
          <img src="" alt="" />
        </div>
      
      <Titulo>Mantenimientos</Titulo>
      <p>Control de Mantenimientos</p>
      <ContainerBtn>
        <Btnsave></Btnsave>

      </ContainerBtn>

      </div>
    </Container>
  );
}
const Container = styled.div``;

const Titulo = styled.span`
  font-size: 5rem;
  font-weight: 700;
`

const ContainerBtn =styled.div`
  display:flex ;
  justify-content: center;
`