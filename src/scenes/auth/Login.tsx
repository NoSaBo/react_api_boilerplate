import React, {Component} from 'react';
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native';
import {Colors} from '../../resources/constants';
import LoginForm from '../../components/auth/LoginForm';
import {HeaderDrawer} from '../../components/menu';
import {ImageBackground} from '../../components/generic';

// const SOURCE_BACKGROUND = require('../../assets/img/background_login.png');

export default class Login extends Component<any, any> {
  static navigationOptions = ({navigation}) => ({
    header: null,
  });

  render() {
    return (
      // <ImageBackground source={SOURCE_BACKGROUND}>
      <SafeAreaView style={styles.containerAreaView}>
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent={true}
          />
          <HeaderDrawer title={'Header Title'} />
          <LoginForm navigation={this.props.navigation} />
        </View>
      </SafeAreaView>
      // </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  containerAreaView: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  container: {
    backgroundColor: 'transparent',
    flex: 1,
  },
});
