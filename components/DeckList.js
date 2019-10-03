import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DeckItem from './DeckItem'
import { connect } from 'react-redux'
import { purple, white, lightPurp } from '../utils/colors';

class DeckList extends Component {

  componentDidMount () {
    //Load decks
  }

  render() {
    const { decks } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
              'Deck',
              {/* { deckId: key } */}
            )}>
        <Text>DeckList</Text>
         { decks && decks.forEach(element => {
          <Text>{element}</Text>
          })
          }
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    padding: 15
  },
})

function mapStateToProps({decks}) {
  const items = Object.values(decks)
  return {
    decks: items
  }
}
export default connect(mapStateToProps)(DeckList)