import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Item = props => (
    <View key={props.index} style={style.line}>
        <Text style={style.lineText}>{props.elem}</Text>
    </View>
)

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
        paddingLeft: 15
    }
})


export default Item