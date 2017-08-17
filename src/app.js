import React, {Component} from 'react'
import {StackNavigator, TabNavigator} from 'react-navigation'
import {Theme, Color} from './components/theme'
import Home from './scene/home'
import Pickup from './scene/pickup'
import Account from './scene/account'

const Stack = TabNavigator({
    Product : {
        screen : Home
    },
    Angkut : {
        screen : Pickup
    },
    Account : {
        screen : Account
    }
}, {
    initialRouteName : 'Angkut',
    tabBarPosition : 'bottom',
    tabBarOptions : {
        inactiveBackgroundColor : Color.primary,
        tabStyle : {
            backgroundColor : Color.primary
        }
    }
})

const App = StackNavigator({
    Home : {
        screen : Stack
    }
}, {
    initialRouteName : 'Home',
    navigationOptions : {
        title : 'Sangkut',
        headerStyle : {
            backgroundColor : Color.primary
        },
        headerTitleStyle : {
            color: Color.default
        }
    }
})
export default App