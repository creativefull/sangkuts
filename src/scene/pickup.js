import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    Button,
    Alert,
    TouchableOpacity
} from 'react-native'
import {Theme, Color} from '../components/theme'

class Product extends Component {
    static navigationOptions = {
        title : "Pickup"
    }
    _angkut(route) {
        const {navigate} = this.props.navigation
        navigate(route)
    }

    render() {
        return(
            <Image source={require('../img/bg-home.png')} style={{resizeMode : 'cover', height : null, width: null, flex : 1}}>
                <View style={{paddingTop: 100, flexDirection: 'row', justifyContent : 'center', alignItems : 'center', flex: 1}}>
                    <TouchableOpacity style={{marginTop: 200, padding: 20, backgroundColor : Color.light}} onPress={() => this._angkut('Angkut')}>
                        <Text style={{color : Color.default}}>ANGKUT APA AJA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop: 200, marginLeft: 10, padding: 20, backgroundColor : Color.light}}>
                        <Text style={{color : Color.default}}>ANGKUT APA AJA</Text>
                    </TouchableOpacity>
                </View>
            </Image>
        )
    }
}

export default Product