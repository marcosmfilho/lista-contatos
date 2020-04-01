import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Line = ({ name = '', value = '-' }) => {
    return (
        <View style={styles.line}>
            <Text style={[styles.cell, 
                        styles.label,
                        name.length > 8 ? styles.longLabel : null
            ]}>{name}:</Text>
            <Text style={[styles.cell, styles.content]}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#c5c5c4'
    },
    cell: {
        fontSize: 18,
        paddingLeft: 5
    },
    label: {
        fontWeight: 'bold',
        flex: 1
    },
    content: {
        flex: 3
    },
    longLabel: {
        fontSize: 11
    }
})

export default Line