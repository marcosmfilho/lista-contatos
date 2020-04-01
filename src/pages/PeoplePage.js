import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

import List from '../components/List'
import axios from 'axios'

export default class PeoplePage extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      people : []
    }
  }

  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?nat=br&results=150')
      .then(response => {
          const { results } = response.data
          this.setState({
              people: results
          })
      })
  }

  render() {
    return (
      <View>
          <List 
            elements={this.state.people} 
            onPressItem={(page, params) => { this.props.navigation.navigate(page, params)} } 
          />
      </View>
    )
  }
}

