import { useState } from "react";
import { Container, Header,  Content } from 'rsuite';

import Blog from "./Components/TextModels/Blog";
import SuitNavbar from "./Components/Navbar";

function App() {
  const [Comp, Setcomp] = useState(null);
  //    {Comp == null ? <></> : <Comp/>}

  return (
    <Container >
      <SuitNavbar/>
      <Container style={{margin:'18px' ,gap:'10px'}}>
          
          <Content style={{overflowY:'hidden'}}>
            <Blog/>
          </Content>
        </Container>
       
    </Container>
  );
}

export default App;
