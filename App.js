import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'
import Header from './components/Header'
import Poster from './components/Poster'

const url = 'https://gitlab.com/gHashTag/react-native-init-data/raw/master/db.json'

export default class App extends Component {
  state = {
    title: 'Welcome',
    data: [],
    search: ''
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    } catch (e) {
      throw e
    }
  }

  updateSearch = search => {
    this.setState({ search })
  }

  render() {
    const { title, data } = this.state
    const { container } = styles
    const { search } = this.state
    console.log(item.show.name)
    return(
      <View>
         <Header title={title} />
         <SearchBar
            placeholder="Type here..."
            onChangeText={this.updateSearch}
            value={search}
        />
         <ScrollView>
           <View style={container}>
             { data.map(item => (
               <Poster data={item} key={item.id} />
             ))
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