import styled from "styled-components";
import {Btnsave,v} from "../../index";
export function LoginTemplate() {
  return (
    <Container>
      
      <div>
        <span>version 1.0</span>
        <div>
          <img src="" alt="" />
        </div>
      
      <Titulo>Mantenimientos</Titulo>
      <p>Control de Gastos</p>
      <ContainerBtn>
        <Btnsave titulo="Iniciar con Google" icono={<v.iconogoogle/>}></Btnsave>

      </ContainerBtn>

      </div>
    </Container>
  );
}
const Container = styled.div`
  background
`;

const Titulo = styled.span`
  font-size: 5rem;
  font-weight: 700;
`

const ContainerBtn =styled.div`
  display:flex ;
  justify-content: center;
`