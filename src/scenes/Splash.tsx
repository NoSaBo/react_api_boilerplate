import React, {Component} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  ImageBackground,
  StatusBar,
  Text,
} from 'react-native';
import {Colors} from '../resources/constants';

export default class Splash extends Component<any> {
  static navigationOptions = ({navigation}) => ({
    header: null,
  });

  async componentDidMount() {
    setTimeout(async () => {
      this.props.navigation.navigate('Login');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <ImageBackground
          source={require('../assets/img/splash.jpg')}
          style={styles.backgroundImage}>
          <ActivityIndicator
            style={styles.loading}
            animating={true}
            color="white"
            size="large"
            hidesWhenStopped={true}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PrimaryDark,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  loading: {
    position: 'absolute',
    left: '45%',
    top: '40%',
  },
});
