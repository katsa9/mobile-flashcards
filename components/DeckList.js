import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
      <View style={styles.container}>
          {items.map((item) => {
            return (
              <TouchableOpacity onPress={() => this.props.navigation.navigate(
                'Deck',
                { deckId: item.title }
              )}
              key={item.title}>
                {/* <View style={styles.deck} key={item.title}> */}
                  <DeckPanel deckId={item.title}/>
                {/* </View> */}
              </TouchableOpacity>
            )
          })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
    // justifyContent: "flex-start",
    // alignItems: 'center'
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