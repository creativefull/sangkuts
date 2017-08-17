import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'

class AccountScreen extends Component {
    static navigationOptions = {
        title : "Account"
    }
    render() {
        return(
            <View>
                <Text>Hello World</Text>
            </View>
        )
    }
}

export default AccountScreen