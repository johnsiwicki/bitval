/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  StatusBarIOS,
 TouchableHighlight,
  Text,
  Image,
  View
} from 'react-native';


StatusBarIOS.setStyle('light-content');

class bitc extends Component {

  fetchData() {
  fetch('https://blockchain.info/ticker', {method: "GET"})
      .then((response) => response.text())
      .then((responseText) => {
        var realPrice =  JSON.parse(responseText);
        console.log(realPrice);
         this.setState({
          symbol: realPrice.USD.symbol,
          price: realPrice.USD.last,
        });
      })
      .catch((error) => {
        console.warn(error);
      }).done();

}
  constructor(props) {
    super(props); 
    this.state = {
      price: null
    };
  }

   componentDidMount() {
    this.fetchData();
  }
  
  render() {
    var t = new Date().toLocaleString();

 

    return (
      <View style={styles.container}>
      
      <Text style={styles.ptext}>
          Current Value:
        </Text>
        <Text style={styles.welcome}>
          1 BTC = {this.state.symbol}{this.state.price}
        </Text>
        <Text style={styles.date}>
          As of {t}
        </Text>
 
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#274A61',
  }, 
  icon: {
    width: 80, 
    height: 80,
  },
  ptext: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#FFF',
  },
  welcome: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#FFF',
  },
  date: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFF',
  },
});

AppRegistry.registerComponent('bitc', () => bitc);
