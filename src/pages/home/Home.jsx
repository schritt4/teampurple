import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BodyWrapper from '../../components/Bodywrapper';
import styled from "styled-components";

const Div1 = styled.div`
 background-color : #F5F5F5;
 width : 100vw;
 height : 50vw; 
 
`

export default function Home() {
  return (
    <>
      <Header />
      <BodyWrapper>
        <Div1> 사용 설명 </Div1>
      </BodyWrapper>
      <Footer/>
    </>
  )
}