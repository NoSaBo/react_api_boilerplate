import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Text from "./Text";
import { Colors } from "../../resources/constants";
import { Scale } from "../../resources/functions";

interface PropsLink {
  style?: any;
  textStyle?: any;
  text: string;
  children?: any;
  onPress?: any;
  disabled?: boolean;
}

const Link = (props: PropsLink) => {
  return (
    <TouchableOpacity
      style={[props.style, { opacity: props.disabled ? 0.6 : 1 }]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={[styles.textLink, props.textStyle]}>{props.text}</Text>
      {props.children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  textLink: {
    color: Colors.Accent,
    alignSelf: "center",
    fontFamily: "Roboto-Regular",
    fontWeight: "500",
    fontSize: Scale.verticalScale(14)
  },
  line: {
    height: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: Colors.White
  }
});
export default Link;
