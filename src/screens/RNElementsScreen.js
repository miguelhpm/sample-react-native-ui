import React from 'react';
import { View } from 'react-native';
import { Header, Card, Icon, ListItem, Button } from 'react-native-elements';

export default class RNElementsScreen extends React.Component {

    constructor(props) {
        super(props);
      }

    renderHeaderLeftComponent () {
        return (
            <Icon
            name='arrow-back'
            color='#fff'
            onPress={() => this.props.navigator.pop()} />
        )
      }

    renderBodyComponent () {
        const list = [
            {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
            },
            {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
            }
        ];
        return (
            <View>
                <Card title="CARD WITH DIVIDER">
                    {
                        list.map((l, i) => (
                        <ListItem
                            key={i}
                            leftAvatar={{ source: { uri: l.avatar_url } }}
                            title={l.name}
                            subtitle={l.subtitle}
                            chevron
                        />
                        ))
                    }
                </Card>
                <Card title="CARD WITH DIVIDER">
                    {
                        list.map((l, i) => (
                        <ListItem
                            key={i}
                            leftAvatar={{ source: { uri: l.avatar_url } }}
                            title={l.name}
                            subtitle={l.subtitle}
                            chevron
                        />
                        ))
                    }
                </Card>
            </View>
        )
      }

    render() {
        return (
            <View>
                <Header
                    leftComponent={this.renderHeaderLeftComponent()}
                    centerComponent={{ text: 'Shaman RNElements', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'menu', color: '#fff' }}
                    />
                {this.renderBodyComponent()}
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Icon
                        reverse
                        name="plus" type="font-awesome"
                        color='#5067FF'
                        onPress={() => console.log('hello')} />
                </View>
            </View>
        );
    }
}