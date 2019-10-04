import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { purple, white, lightPurp } from '../utils/colors';

function DeckPanel (props) {
  const { questions } = props.display
  return (
    <View style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.heading}>{props.display.title}</Text>
      </View>
      <View style={styles.container}>
      <Text style={styles.cardCount}>{questions ? questions.length : 0} Cards</Text>
      </View>
    </View>

  )
}

function mapStateToProps (state, { deckId }) {
  const deck = state[deckId]
  console.log("deck passed in: ", deck)
  return {
    display: deck
  }
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    marginTop: 10,
    backgroundColor: purple,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    paddingTop: 8,
    // paddingBottom: 30,
    color: white,
    fontSize: 28,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  cardCount: {
    color: lightPurp,
    fontSize: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingBottom: 15,
  }
})

export default connect(mapStateToProps)(DeckPanel)