import React from 'react'
import { StyleSheet, FlatList} from 'react-native'

import Item from './Item'

const List = props => {
    
    const { elements, onPressItem} = props

    return (
        <FlatList 
            style={style.container}
            data={elements}
            renderItem={({ item }) => {
                return <Item elem={item} navigate={onPressItem} />
            }}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
})


export default List