import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
  FlatList,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../resources/constants";
const { width: viewportWidth } = Dimensions.get("window");

interface PropsHeader {
  title?: string;
  items?: any;
}

interface StateHeader {
  visibleList: boolean;
}

export default class MenuBurger extends Component<PropsHeader, StateHeader> {
  constructor(props: any) {
    super(props);
    this.state = {
      visibleList: false
    };
  }

  onShowMenu = (visible: boolean) => {
    this.setState({ visibleList: !visible });
  };

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.boxTitle}>
          <TouchableOpacity
            onPress={() => this.onShowMenu(this.state.visibleList)}
          >
            <Icon
              name="menu"
              size={30}
              color={Colors.White}
              style={{ paddingHorizontal: 10 }}
            />
          </TouchableOpacity>
          {this.props.title && (
            <Text style={styles.title}>{this.props.title}</Text>
          )}
        </View>
        {this.state.visibleList && (
          <View style={styles.list}>
            <ScrollView showsVerticalScrollIndicator={true}>
              <FlatList
                data={this.props.items}
                numColumns={1}
                keyExtractor={(item: any) => "" + item.id}
                renderItem={({ item, index }) => (
                  <TouchableOpacity key={index} style={styles.item}>
                    <View style={{ flexDirection: "row" }}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-start"
                        }}
                      >
                        <Text>{item.name}</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          flex: 1,
                          justifyContent: "flex-end"
                        }}
                      >
                        <Icon name={"chevron-right"} size={20} />
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    height: "auto",
    width: viewportWidth * 0.8,
    borderLeftWidth: 3,
    borderLeftColor: Colors.Warning,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Accent
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.White
  },
  header: {
    position: "absolute",
    top: Platform.select({ android: 20 }),
    zIndex: 1
  },
  boxTitle: {
    flexDirection: "row"
  },
  title: {
    color: Colors.White,
    fontWeight: "bold",
    fontSize: 16
  }
});
