import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../resources/constants';
import {DrawerActions, withNavigation} from 'react-navigation';
const {height: viewPortHeight} = Dimensions.get('window');

interface PropsDrawer {
  title?: string;
  menuDots?: boolean;
  onPressRight?: () => void;
}

const HeaderDrawer = (props: PropsDrawer) => (
  <View style={styles.header}>
    <View style={styles.boxTitle}>
      <View style={{position: 'absolute', left: 0, top: -4}}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.dispatch(DrawerActions.toggleDrawer());
          }}>
          <IconFeather
            name="menu"
            size={25}
            color={Colors.White}
            style={{paddingHorizontal: 10}}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{props.title}</Text>
      {props.menuDots ? (
        <View style={{position: 'absolute', right: 0, top: -4}}>
          <TouchableOpacity onPress={props.onPressRight}>
            <IconMaterial
              name="dots-vertical"
              size={25}
              color={Colors.White}
              style={{paddingHorizontal: 10}}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: viewPortHeight * 0.07,
    backgroundColor: Colors.PrimaryDark,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: Colors.White,
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
  },
});
export default withNavigation(HeaderDrawer);
