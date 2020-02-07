import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Content, Separator, ListItem, Fab, View,} from 'native-base';


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
                    <Separator bordered>
                        <Text>Full</Text>
                    </Separator>
                    <ListItem>
                        <Text>Gente de la U</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Chamba</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>Octavos</Text>
                    </Separator>
                    <ListItem>
                        <Text>Familia</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Primos</Text>
                    </ListItem>
                </Content>
                <View style={{ flex: 1 }}>
                    <Fab
                        direction="up"
                        containerStyle={{ }}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight">
                        <Icon name="plus" type="FontAwesome"/>
                    </Fab>
                </View>
            </Container>
        );
    }
}