import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

interface PropsText {
  style?: any;
  numberOfLines?: number;
}

export default class TextFont extends Component<PropsText> {
  render() {
    return (
      <Text
        {...this.props}
        numberOfLines={this.props.numberOfLines}
        allowFontScaling={false}
        style={[styles.text, this.props.style]}
      >
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto"
  }
});
