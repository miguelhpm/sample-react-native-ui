import React from 'react';
import { View, Button} from 'react-native';

export default class MainScreen extends React.Component {

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
                <Button
                    style={{
                        color: 'black',
                        fontWeight: 'bold'
                    }}
                    title="React Native Vector Icons"
                    onPress={() => this.props.navigator.push('RNVectorIconsScreen')}
                    >
                </Button>
                <Button
                    style={{
                        color: 'black',
                        fontWeight: 'bold'
                    }}
                    title="Native Base"
                    onPress={() => this.props.navigator.push('NativeBaseScreen')}
                    >
                </Button>
                <Button
                    style={{
                        color: 'black',
                        fontWeight: 'bold'
                    }}
                    title="React Native Elements"
                    onPress={() => this.props.navigator.push('RNElementsScreen')}
                    >
                </Button>
                <Button
                    style={{
                        color: 'black',
                        fontWeight: 'bold'
                    }}
                    title="UI Kitten"
                    onPress={() => this.props.navigator.push('UIKittenScreen')}
                    >
                </Button>
            </View>
        );
    }
}