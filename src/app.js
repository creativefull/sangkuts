import React, {Component} from 'react'
import {StackNavigator, TabNavigator} from 'react-navigation'
import {Theme, Color} from './components/theme'
import Home from './scene/home'
import Pickup from './scene/pickup'
import Angkut from './scene/angkut'
import Account from './scene/account'

const Stack = TabNavigator({
    Product : {
        screen : Home
    },
    Pickup : {
        screen : Pickup
    },
    Account : {
        screen : Account
    }
}, {
    initialRouteName : 'Pickup',
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
    },
    Angkut : {
        screen : Angkut
    }
}, {
    initialRouteName : 'Home',
    navigationOptions : {
        title : 'Sangkut',
        headerStyle : {
            backgroundColor : Color.primary
        },
        headerTintColor : 'white',
        headerTitleStyle : {
            color: Color.default
        }
    }
})
export default App