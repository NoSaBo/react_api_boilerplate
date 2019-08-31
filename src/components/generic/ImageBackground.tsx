import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';

interface PropsImage {
  source: any;
}

class ImageContainer extends Component<PropsImage> {
  render() {
    return (
      <ImageBackground
        source={this.props.source}
        style={styles.container}
        resizeMode={'stretch'}>
        <View style={styles.children}>{this.props.children}</View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  children: {
    flex: 1,
  },
});

export default ImageContainer;
