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
    const { items } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
              'Deck',
              {/* { deckId: key } */}
            )}>
        <Text>DeckList</Text>
        </TouchableOpacity>
        <View style={styles.container}>

        {items.map((item) => {
        return (
          <View style={styles.deck} key={item.title}>
              <Text style={{fontSize: 20}}>
                {item.title}
              </Text>
          </View>
        )
      })}
      </View>
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
  heading: {
    paddingTop: 30,
    marginBottom: 40,
    color: purple,
    fontSize: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deck: {
    flexDirection: 'row',
    marginTop: 12
  },
})

function mapStateToProps(state) {
  console.log("state: ", state)
  const items = Object.values(state)
  console.log("DEcks: ", items)
  return {
    items
  }
}
export default connect(mapStateToProps)(DeckList)