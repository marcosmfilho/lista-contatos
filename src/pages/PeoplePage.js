import { StyleSheet, Text, View, ActivityIndicator, ScrollView,RefreshControl } from 'react-native';
import React from 'react';

import List from '../components/List'
import axios from 'axios'

export default class PeoplePage extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      people : [],
      loading: false,
      error: false,
      errorMessage: '',
      refreshing: false
    }
  }

  componentDidMount(){ 
      this.setState({ loading: true })
      axios
      .get('https://randomuser.me/api/?nat=br&results=300')
      .then(response => {
          const { results } = response.data
          this.setState({
              people: results,
              loading: false
          })
      }).catch(error => {
          this.setState({
              error: true,
              errorMessage: error.message,
              loading: false
          })
      })
  }
  
  _onRefresh = () => {

    this.setState({ refreshing: true })
    axios
    .get('https://randomuser.me/api/?nat=br&results=300')
    .then(response => {
        const { results } = response.data
        this.setState({
            people: results,
            refreshing: false
        })
    }).catch(error => {
        this.setState({
            error: true,
            errorMessage: error.message,
            refreshing: false
        })
    })
  }

  renderPage(){ 

      if(this.state.loading)
          return <ActivityIndicator size="large" color="#6ca2f7" /> 
      
      if(this.state.error)
          return <View style={styles.error}><Text style={styles.errorMessage}>{this.state.errorMessage} :(</Text></View>
      
      return (
        <ScrollView 
          refreshControl={
            <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />
          }>
          <List 
              elements={this.state.people} 
              onPressItem={(page, params) => { this.props.navigation.navigate(page, params)} } 
          />
        </ScrollView>
      )
  }     

  render() {
    return (
      <View style={styles.container}>
            { this.renderPage() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    error: {
      alignSelf : 'center',
      padding: 50,
      backgroundColor: '#ccc',
      borderColor: '#c5c5c5',
      borderWidth: 3,
      borderRadius: 30,
      elevation: 3
    }, 
    errorMessage: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red',
    }
})
