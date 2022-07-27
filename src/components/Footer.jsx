import styled from "styled-components";
import Logo from "../assets/purplelogo.png";

const GrayWrapper = styled.footer`
	width: 100%;
	height: 10vh;
	background: #737580;
	margin: none;
	bottom: 0;
  display:flex;
  justify-content: space-between;
`;
const PurpleLogo = styled.img`
	width: 8vh;
	margin: 1vh;
	border-radius: 50%;
`;
const Button = styled.div`
	width: 8vh;
  background-color: red; 
  border-radius: 50% ;
  padding: auto;
  margin:0 auto 0 auto;
`;

export default function Footer() {
	return (
		<GrayWrapper>
      <Button>지도로찾기</Button>
      <Button>키워드</Button>
      <PurpleLogo src={Logo} />
      <Button>몰라~</Button>
			<Button>마이페이지</Button>
		</GrayWrapper>
	);
}
