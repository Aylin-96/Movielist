import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Header from './components/Header'
import Poster from './components/Poster'

const url = 'http://api.tvmaze.com/search/shows?q=batman'

export default class App extends Component {
  state = {
    title: 'Welcome',
    data: [],
  }

  componentDidMount = async () => {
    console.log(url)
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
      console.log({data})
    } catch (e) {
      throw e
    }
  }

  render() {
    const { title, data } = this.state
    const { container } = styles
    return(
      <View>
         <Header title={title} />
         <ScrollView>
           <View style={container}>
             { data.map(item =>
               <Poster data={item.show} key={item.show.id} />
             )
             }
           </View>
         </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 150
  }
})