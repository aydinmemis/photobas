import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Header = ({ onPress, headerTitle }) => (
  // <LinearGradient colors={['#61045f', '#20011f']}>
  <View>
    <View style={styles.header}>
      <Text style={styles.headerText}>{headerTitle}</Text>
      <TouchableOpacity onPress={onPress}>
        <Icon name="shopping-bag" style={{ marginRight: 15 }} size={25} color="#2626" />
      </TouchableOpacity>
    </View>
    <View>
      <Text style={styles.headerDescription}>kategoriler</Text>
    </View>
  </View>
  //  </LinearGradient>
);
Header.propTypes = {
  onPress: PropTypes.func,
  headerTitle: PropTypes.string,
};
export default Header;
