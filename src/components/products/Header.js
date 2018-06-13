import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const Header = ({ onPressCart, onPressBack, title }) => (
  // <LinearGradient colors={['#23CBC7', '#FFF']}>
  <View style={styles.header}>
    <View style={styles.backButton}>
      <TouchableOpacity onPress={onPressBack}>
        <Icon name="long-arrow-left" size={25} color="#262626" />
      </TouchableOpacity>
    </View>
    <View style={styles.headerTitleView}>
      <Text style={styles.headerText}>{title}</Text>

      <TouchableOpacity onPress={onPressCart}>
        <Icon name="shopping-bag" style={{ marginRight: 15 }} size={20} color="#2626" />
      </TouchableOpacity>
    </View>
  </View>
  // </LinearGradient>
);
Header.propTypes = {
  onPressBack: PropTypes.func,
  onPressCart: PropTypes.func,
  title: PropTypes.string,
};
export default Header;
