import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

const SlidePhotos = props => {
    const photos = props.photos;
    
    return ( 
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.topCard}>
                    <Text style={styles.titleCard}>DESTAQUES</Text>
                    <TouchableHighlight onPress={() => props.checkFavorite()} style={styles.favoriteButton}>
                        <Image
                            style={styles.favoriteImage}
                            source={{ uri: 'https://image.flaticon.com/icons/png/512/130/130188.png' }} 
                        />      
                        {/* <FontAwesome icon={RegularIcons.angry} /> */}
        
                        </TouchableHighlight>                    
                </View>

                <Slideshow 
                    style={styles.slideShow}
                    height={150}
                    dataSource={photos} 
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
        height: 420,
        marginTop: 30,
        padding: 20,
        borderRadius: 5,
        shadowColor: "#fff",
        shadowOpacity: 0.20,
        shadowRadius: 2.41,
        elevation: 3,
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
    favoriteButton: {
        height: 20,
        width: 20,
        borderRadius: 50,
      }, 
    favoriteImage: {
        height: 15,
        width: 15,
        color: 'red'
    },
    slideShow: {
      width: 300,
      height: 320,
    },
    titleSlide: {
        fontFamily: 'Lato-Light',
        fontSize: 18,
        color: 'rgb(74, 74, 74)',
        marginTop: 15,
    },
    content: {
        fontFamily: 'Lato-Light',
        fontSize: 14,
        color: 'rgb(74, 74, 74)',
        marginTop: 15,
    }
  });

export default SlidePhotos;