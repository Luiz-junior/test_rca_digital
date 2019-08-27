import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import { Icon } from 'react-native-elements';

const SlidePhotos = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.topCard}>
                    <Text style={styles.titleCard}>DESTAQUES</Text>
                    <Icon
                        name='stars'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => alert('hello')} 
                    />                     
                </View>

                <Slideshow 
                    style={styles.slideShow}
                    height={150}

                    dataSource={[
                    { url:'http://placeimg.com/640/480/any' },
                    { url:'http://placeimg.com/640/480/any' },
                    { url:'http://placeimg.com/640/480/any' }
                    ]}
                />

                <Text style={styles.titleSlide}>Conheça o Clube de Vantagens do Sindico!</Text>
                <Text style={styles.content}>
                    Com o clube você tem descontos e benefícios especiais na compra de 
                    diversos produtos em mais de 80 parceiros.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },  
    card: {
        width: '90%',
        height: 400,
        marginTop: 30,
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },  
    topCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },  
    titleCard: {
        fontFamily: 'Lato-Regular',
        color: 'rgb(155, 155, 155)',
        fontSize: 11,
    },  
    slideShow: {
      width: 300,
      height: 320,
    },
    titleSlide: {
        fontFamily: 'Lato-Light',
        fontSize: 18,
        color: 'rgb(74, 74, 74)',
        marginTop: 10,
    },
    content: {
        fontFamily: 'Lato-Light',
        fontSize: 14,
        color: 'rgb(74, 74, 74)',
        marginTop: 10,
    }
  });

export default SlidePhotos;