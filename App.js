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
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => {
          const { results } = response.data
          const namesReq = results.map( people => people.name.first)
          this.setState({
              people: results
          })
      })
  }

  getPeople(){
     return this.state.people.map( obj => {
          const people = {id: obj.login.uuid, name: obj.name.first}
          console.log(people)
          return people
     })
  }

  render() {
    return (
      <View>
          <Header text="People"/>
          <List elements={this.getPeople()} />
      </View>
    )
  }
}

