import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Header = ({ onPressBack, title }) => {
    return (
        <View style={styles.header}>
            <TouchableHighlight onPress={onPressBack} underlayColor={'white'}>
                <Icon name="long-arrow-left" size={25} color="#262626" />
            </TouchableHighlight>

            <Text style={styles.headerTitle}>{title}</Text>

        </View>

    );
}
Header.propTypes = {
    onPressBack: PropTypes.func,
    title: PropTypes.string
}



export default Header;