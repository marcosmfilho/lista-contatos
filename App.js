import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

import Header from './src/components/Header'
import List from './src/components/List'
import axios from 'axios'

export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      people : []
    }
  }

  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?nat=br&results=50')
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
          <Header title="Contatos"/>
          <List elements={this.state.people} />
      </View>
    )
  }
}

