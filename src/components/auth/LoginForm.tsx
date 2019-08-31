import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  StatusBar,
  Button,
  Image,
} from 'react-native';
import {Colors} from '../../resources/constants';
import Icon from 'react-native-vector-icons/Feather';

const {height: viewPortHeight} = Dimensions.get('window');

export default class LoginForm extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  async componentDidMount() {}

  login = async () => {
    this.props.navigation.navigate({
      routeName: 'Home',
    });
  };

  goSignUp = () => {
    this.props.navigation.navigate({
      routeName: 'SignUp',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={{flex: 0.4}}>
              <View style={styles.viewImage}>
                <Image
                  style={styles.imageLogo}
                  source={require('../../assets/img/logo.png')}
                />
              </View>
            </View>
            <View style={{flex: 0.6}}>
              <View style={styles.viewForm}>
                <View style={styles.viewFormLogin}></View>
                <View style={{paddingHorizontal: 20}}>
                  <Button
                    title="ToHome"
                    onPress={() => this.login()}
                    color={Colors.Accent}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLogo: {
    flex: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  viewImage: {
    flex: 1,
    backgroundColor: Colors.PrimaryDark,
    paddingVertical: 10,
    marginHorizontal: 38,
    marginTop: viewPortHeight * 0.12,
    marginBottom: 24,
    height: 70,
    borderRadius: 5,
  },
  viewForm: {
    flex: 1,
  },
  viewLogo: {
    backgroundColor: Colors.PrimaryDark,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 20,
  },
  viewFormLogin: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingTop: 40,
    paddingBottom: 30,
  },
});
