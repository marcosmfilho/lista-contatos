import React from 'react'
import { Text, View, StyleSheet, ScrollView} from 'react-native'

import Item from './Item'

const List = props => {
    
    const list = props.elements.map(elem => 
        <Item elem={elem} key={elem.login.id}/>
    )

    return (
        <ScrollView>
            <View style={style.container}>
                {list}
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
})


export default List