import NavigationBar from 'react-native-navbar';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
 TouchableHighlight,
  Text,
  Image,
  View
} from 'react-native';

class bitc extends Component {

 constructor(props) {
    super(props);
    this.state = {
      price: null
    };
  }


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
   componentDidMount() {
    this.fetchData();
}


render() {
    var t = new Date().toLocaleString();
    var titleConfig = {
        title: 'BitVal',
      };
      var rightButtonConfig = {
        title: 'Refresh',
        handler: () => handleClick(),
      };
  return (
      <View style={styles.container}>
      <NavigationBar
         title={titleConfig} />
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
    //justifyContent: 'center',
    //alignItems: 'center',
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
