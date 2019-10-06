import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import DeckPanel from './DeckPanel'
import { connect } from 'react-redux'
import { purple, white, lightPurp } from '../utils/colors';

class DeckList extends Component {

  componentDidMount () {
    //Load decks
  }

  render () {
    const { items } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={items}
          renderItem={({ item }) => (<TouchableOpacity onPress={() => this.props.navigation.navigate(
            'Deck',
            { deckId: item.title }
          )}
            key={item.title}>
            <DeckPanel deckId={item.title} />
          </TouchableOpacity>)}
          keyExtractor={item => item.title}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
  },
  heading: {
    color: purple,
    fontSize: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },

})

function mapStateToProps (state) {
  console.log("state: ", state)
  const items = Object.values(state)
  console.log("DEcks: ", items)
  return {
    items
  }
}
export default connect(mapStateToProps)(DeckList)