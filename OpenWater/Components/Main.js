import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Container, Content, Header, Textarea, Left, Right, Title, Button, Label, InputGroup, Body, Icon, Form, Input, Item, ListItem, Text, CheckBox } from 'native-base';


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});


export default class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      markers: [],
    }
    this.handleLongPress = this.handleLongPress.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this._navigateDiveDetail = this._navigateDiveDetail.bind(this);
  }

  _navigateNewDiveSite(coordinate){
    this.props.navigator.push({
      name: 'NewDiveSite',
      passProps: {
        coordinate: coordinate,
      },
    })
  }

  //TODO change to input of dive id
  _navigateDiveDetail(){
    this.props.navigator.push({
      name: 'DiveDetail',
      passProps: {

      },
    })
  }

  handleLongPress(e){
    this._navigateNewDiveSite(e.nativeEvent.coordinate);
  }

  handlePress(e){
    // this.setState({
    //   markers: [
    //     ...this.state.markers,
    //     {
    //       title: "Test",
    //       description: "Test Description in Latin of course",
    //       coordinate: e.nativeEvent.coordinate,
    //     }
    //   ],
    // });
  }



  render() {
    var coord = {
      latitude: 37.78825,
      longitude: -122.4324,
    }

    return (
          <MapView style={ styles.map }
            initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
            onLongPress={this.handleLongPress}
            onPress={this.handlePress}
            >
          {this.state.markers.map((marker, i ) => {
            return <Marker {...marker} key={i} />
        })}
          <Marker title={"fuck"} coordinate={coord}>
          <MapView.Callout  >
          <View >
            <Text >Charlamange's Bommie</Text>
            <Button transparent onPress={this._navigateDiveDetail}>
                <Text>Explore</Text>
                <Icon name='arrow-forward' />
            </Button>
          </View>
      </MapView.Callout>
          </Marker>
          </MapView>
    );
  }
}
