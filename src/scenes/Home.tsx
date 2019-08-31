import React, {Component} from 'react';
import {StyleSheet, View, FlatList, StatusBar, Text} from 'react-native';
import {Colors} from '../resources/constants';
import {HeaderDrawer} from '../components/menu';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';

export default class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={styles.containerAreaView}>
        <View style={styles.container}>
          <StatusBar
            translucent={false}
            backgroundColor={Colors.PrimaryDark}
            barStyle="light-content"
          />
          <HeaderDrawer title="Home" />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text>{'Home Screen'}</Text>
            </View>
          </ScrollView>
        </View>
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
    flex: 1,
    backgroundColor: Colors.White,
  },
});
