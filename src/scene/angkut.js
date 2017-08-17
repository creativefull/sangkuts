import React, {Component} from 'react'
import {
    View,
    Text,
    Modal,
    Button,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native'
import {Theme, Color} from '../components/theme'
import MapView from 'react-native-maps'
const height = Dimensions.get('window').height;

class AngkutScreen extends Component {
    static navigationOptions = {
        title : "Angkut",
    }
    constructor() {
        super()
        this.state = {
            help : false,
            region : {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0021
            },
            marker : {
                latitude: 37.78825,
                longitude: -122.4324
            }
        }
    }
    onRegionChange(region) {
        this.setState({ region });
    }
    render() {
        return(
            <ScrollView {...this.props}>
                {/*<Modal
                    animationType="slide"
                    transparent={false}
                    onRequestClose={() => this.setState({ help : false})}
                    visible={this.state.help}>
                    <Text>Hello World</Text>
                </Modal>*/}

                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    region = {this.state.region}>
                    <MapView.Marker coordinate={this.state.marker}>
                        <View>
                            <Image source={require('../img/marker.png')} style={{width : 50, height : 50}}/>
                        </View>

                    </MapView.Marker>
                </MapView>

                <ScrollView style={{position : 'absolute', bottom: 100, left : 10, right : 10, flex: 1, padding: 10, margin: 10}}>
                    <TouchableOpacity style={{backgroundColor : Color.primary, padding: 10, borderRadius : 50}}>
                        <Text style={{textAlign: 'center', color: Color.default}}>Jemput Disini</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  map: {
    flexDirection: 'row',
    flex : 1,
    height : height
  },
});

export default AngkutScreen