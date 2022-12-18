import { Link } from "react-router-dom";

import bannerImage from '../../assets/banner.png' 
import { Button } from "../../components/button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";



import { Container, Column, Title, TitleHighlight } from "./styles";
const Feed = () => {
    return (<>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}> 
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Column>
        <Column flex={1}>
          <TitleHighlight>#RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo percentual={80} nome="Juliana Lopes" image="https://avatars.githubusercontent.com/u/118860220?v=4"/>
          <UserInfo percentual={75} nome="Julia Lopes" image="https://avatars.githubusercontent.com/u/118860220?v=4"/>
          <UserInfo percentual={60} nome="Juliane Lopes" image="https://avatars.githubusercontent.com/u/118860220?v=4"/>
          <UserInfo percentual={55} nome="Juju Lopes" image="https://avatars.githubusercontent.com/u/118860220?v=4"/>
          <UserInfo percentual={50} nome="Juliana Lopez" image="https://avatars.githubusercontent.com/u/118860220?v=4"/>
        </Column>
      </Container>
    </>)
}

export { Feed }