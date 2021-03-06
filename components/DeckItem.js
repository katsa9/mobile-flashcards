import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { purple, white } from '../utils/colors';
import DeckPanel from './DeckPanel'
import CustomButton from './CustomButton';

class DeckItem extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params 
    return {
      title: `${deckId}`
    }
  }
  render() {
    const { display } = this.props
     return (
      <View style={styles.container}>
      <DeckPanel deckId={display.title}/>
      <View style={styles.container}>
      <CustomButton
      btnStyle={styles.newCardBtn}
      textStyle={styles.newCardBtnText}
        onPress={() => this.props.navigation.navigate(
              'NewCard',
              { deckId: display.title }
            )}
          disabled={false}>
          Add Card
          </CustomButton> 
        <CustomButton
        onPress={() => this.props.navigation.navigate(
              'StartQuiz',
              { deckId: display.title }
            )}
          disabled={false}>
          Start Quiz
          </CustomButton> 
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
  },
  newCardBtn: {
    marginTop: 40,
    borderColor: purple,
    borderWidth: 1,
    backgroundColor: white,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  newCardBtnText: {
    color: purple,
    fontSize: 20,
    textAlign: 'center',
  },
})

function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params
  const deck = state[deckId]
  return {
    display: deck
  }
}

export default connect(mapStateToProps)(DeckItem)