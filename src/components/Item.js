import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { capitalizeFirstLetter } from '../util'

const Item = props => {
    
    const { elem, navigate } = props
    const {title, first, last } = elem.name 

    return(
        <TouchableOpacity onPress={ () => navigate('PeopleDatailPage', { elem }) }>
            <View style={style.line}>
                <Image style={style.avatar} source={{ uri: elem.picture.thumbnail }} />
                <Text style={style.lineText}>
                    { `${capitalizeFirstLetter(title)} ${first} ${last}` }
                </Text>
            </View>
        </TouchableOpacity>
    )

}

const style = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7,
        overflow: 'scroll'
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50

    }
})


export default Item