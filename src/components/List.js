import React from 'react'
import { StyleSheet, FlatList} from 'react-native'

import Item from './Item'

const List = props => {
    
    const { elements, onPressItem } = props

    return (
        <FlatList style={style.container}
            data={elements}
            renderItem={ ({ item }) => {
                <Item elem={item} key={item.login.uuid} navigate={onPressItem} />
            }}
            keyExtractor={item => {item.login.uuid}}
        />
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
})


export default List