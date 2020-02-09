import React from 'react';
import { View, Text, Button} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class RNVectorIconsScreen extends React.Component {

    constructor(props) {
        super(props);
      }

    render() {
        return (
            <View style={{
                // Transparent background because mask is based off alpha channel.
                backgroundColor: 'transparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text
                style={{
                    fontSize: 60,
                    color: 'black',
                    fontWeight: 'bold'
                }}
                >
                    React Native Vector Icons
                </Text>
                <Icon name="rocket" size={30} color="#900" />
                <Icon.Button
                name="facebook"
                backgroundColor="#3b5998">
                Login with Facebook
                </Icon.Button>
                <Icon.Button name="close" onPress={() => this.props.navigator.pop()}>
                    Regresar
                </Icon.Button>
            </View>
        );
    }
}