import React from 'react';

import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    ScrollView, 
    Image, 
} from 'react-native';

const PostsList = props => {
    console.log(props);
    return (
        <ScrollView>
           <FlatList
                data={props.posts}
                renderItem={({item}) => (
                    <View style={styles.container}>
                        <Image source={{uri: item.image}} style={styles.photo} />

                        
                    </View>
                    )
                }
            />
        </ScrollView>
    );
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    photo: {
        width: 300,
        height: 300,
        marginTop: 20,
        borderRadius: 10,
    },
    favorite: {
        marginTop: 10,
        width: 50,
    }
});

export default PostsList;
