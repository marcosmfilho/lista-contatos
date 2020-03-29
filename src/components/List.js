import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Item from './Item'

const List = props => {
    
    const list = props.elements.map(elem => 
        <Item elem={elem.name} index={elem.id}/>
    )

    return (
        <View style={style.container}>
            {list}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
})


export default List