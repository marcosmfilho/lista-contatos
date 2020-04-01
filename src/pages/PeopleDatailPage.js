import { StyleSheet, View, Image} from 'react-native';
import React from 'react';

import Line from '../components/Line'

export default class PeopleDatailPage extends React.Component {

    constructor(props){
        super(props)
    }

    render() {

        const { elem } = this.props.navigation.state.params

        return (
            <View style={styles.container}> 
                <Image 
                    style={styles.avatar} 
                    source={{ uri: elem.picture.large }}
                />
                <View style={styles.detailContainer}>
                    <Line name='Email' value={elem.email}></Line>
                    <Line name='Cidade' value={elem.location.city}></Line>
                    <Line name='Estado' value={elem.location.state}></Line>
                    <Line name='Tel' value={elem.phone}></Line>
                    <Line name='Cel' value={elem.cell}></Line>
                    <Line name='Nacionalidade' value={elem.nat}></Line>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },
    avatar: {
        aspectRatio: 1
    }
})

