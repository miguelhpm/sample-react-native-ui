import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Content, Item, Input } from 'native-base';


export default class NativeBaseScreen extends React.Component {

    constructor(props) {
        super(props);
      }

    render() {
        return (
            <Container>
                <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigator.pop()} >
                    <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Shaman NB</Title>
                </Body>
                <Right>
                    <Button transparent>
                    <Icon name='menu' />
                    </Button>
                </Right>
                </Header>
                <Content>
                <Item regular> 
                    <Input placeholder='Nombre Evento'/>
                    <Icon name='information-circle' />
                </Item>
                <Item transparent>
                    <Button> 
                    <Text>Agregar</Text>
                    </Button>
                </Item>
                </Content>
            </Container>
        );
    }
}