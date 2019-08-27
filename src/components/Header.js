import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Header = props => {
  
    return (
        <LinearGradient 
            style={styles.container}
            colors={['rgb(96, 11, 0)', 'rgb(189, 71, 71)']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            angle={90}
        >
            <Text style={styles.title}> Post ME 
                <Text style={{ fontFamily: 'Lato-Bold', }}> APP </Text> 
            </Text>

            <Image 
                style={styles.avatar}
                source={{ uri: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg' }}
            /> 

        </LinearGradient>
    ) 
  
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        width: '50%',
        fontSize: 25,
        fontFamily: 'Lato-Light',
        color: '#fff',
        marginLeft: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 30,
        marginRight: 10,
        backgroundColor: '#333'
    }
})

export default Header;
