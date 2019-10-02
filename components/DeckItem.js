import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class DeckItem extends Component {
  render() {
     return (
      <View>
      <Text>DeckItem</Text>
      <View>
      <TouchableOpacity onPress={() => this.props.navigation.navigate(
              'NewCard',
              {/* { deckId: key } */}
            )}>
        <Text>Create New Card</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
              'StartQuiz',
              {/* { deckId: key } */}
            )}>
        <Text>Start Quiz</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default DeckItem