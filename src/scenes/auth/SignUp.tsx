import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../resources/constants';
import {SafeAreaView} from 'react-navigation';

export default class Register extends Component<any, any> {
  static navigationOptions = ({navigation}) => ({
    header: null,
  });

  render() {
    return (
      <SafeAreaView style={styles.containerAreaView}>
        <View style={styles.container}></View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerAreaView: {
    backgroundColor: Colors.PrimaryDark,
    flex: 1,
  },
  container: {
    backgroundColor: Colors.White,
    flex: 1,
  },
});
