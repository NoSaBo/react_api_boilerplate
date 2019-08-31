import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {ImageBackground, Link, Text} from '../../components/generic';
// import CONFIG_APP from "../../resources/constants/Config";
import {Dimensions} from 'react-native';
import {StatusBar} from 'react-native';
import {Colors} from '../../resources/constants';
import {
  StackActions,
  NavigationActions,
  withNavigation,
} from 'react-navigation';
const {height: viewportHeight, width: viewportWidth} = Dimensions.get('window');

class CarouselForm extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentPosition: 0,
      textLink: 'Entendido',
    };
  }

  static navigationOptions = ({navigation}) => ({
    header: null,
  });

  //   get Pagination() {
  //     const {currentPosition} = this.state;
  //     return (
  //       <Pagination
  //         dotsLength={CONFIG_APP.IMAGES_CAROUSEL.length}
  //         activeDotIndex={currentPosition}
  //         containerStyle={{
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           paddingTop: 5,
  //           paddingBottom: 10,
  //         }}
  //         dotContainerStyle={{
  //           marginHorizontal: 2,
  //         }}
  //         dotStyle={{
  //           width: 10,
  //           height: 10,
  //           marginHorizontal: 6,
  //           borderRadius: 50,
  //           backgroundColor: Colors.Warning,
  //         }}
  //         inactiveDotStyle={{
  //           width: 10,
  //           height: 10,
  //           borderRadius: 50,
  //           marginHorizontal: 6,
  //           backgroundColor: Colors.White,
  //         }}
  //         inactiveDotOpacity={1}
  //         inactiveDotScale={1}
  //       />
  //     );
  //   }

  goLogin = () => {
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({routeName: 'Login'})],
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    const {currentPosition, textLink} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        {/* <Carousel
          ref={(c: any) => {
            this._carousel = c;
          }}
          autoplay={true}
          autoplayInterval={8000}
          data={CONFIG_APP.IMAGES_CAROUSEL}
          renderItem={({ item, index }) => (
            <ImageBackground source={item.source}>
              <View style={styles.container}>
                <View style={{ flex: 0.6 }} />
                <View style={{ flex: 0.4, paddingHorizontal: 40 }}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
              </View>
            </ImageBackground>
          )}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth}
          firstItem={currentPosition}
          onSnapToItem={(index: number) => {
            this.setState({
              currentPosition: index,
              textLink: index === 3 ? "Continuar" : "Entendido"
            });
          }}
        />
        <View style={styles.dots}>
          <Link
            text={textLink}
            textStyle={{ color: Colors.White, fontSize: 18 }}
            style={{ marginBottom: 10 }}
            onPress={this.goLogin}
          />
          {this.Pagination}
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dots: {
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    color: Colors.White,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: Colors.White,
  },
});

export default withNavigation(CarouselForm);
