import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'

import {StackNavigator, TabNavigator} from 'react-navigation'

class AppScreen extends Component {
    static navigationOptions = {
        title : "Sangkuts"
    }
    render() {
        return(
            <View>
                <Text>Hello World</Text>
            </View>
        )
    }
}

const App = StackNavigator({
    Home : {
        screen : AppScreen
    }
}, {
    initialRouteName : 'Home'
})

export default App