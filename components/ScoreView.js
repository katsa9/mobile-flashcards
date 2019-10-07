import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { purple, white} from '../utils/colors'
import CustomButton from './CustomButton'

class ScoreView extends Component {
  render () {
    const { yourScore, totalQuestions } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Your Score!</Text>
        <Text style={styles.heading}>{yourScore}/{totalQuestions}</Text>

        <View style={styles.btnContainer}>
          <CustomButton
            btnStyle={styles.retakeBtn}
            textStyle={styles.retakeBtnText}
            onPress={() => this.props.navigation.navigate(
              'NewCard',
              { deckId: display.title }
            )}
            disabled={false}>
            Retake Quiz
          </CustomButton>
          <CustomButton
            onPress={() => this.props.navigation.navigate(
              'StartQuiz',
              { deckId: display.title }
            )}
            disabled={false}>
            Back to Deck
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
  btnContainer: {
    flex: 1,
    backgroundColor: white,
  },
  retakeBtn: {
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
  retakeBtnText: {
    color: purple,
    fontSize: 20,
    textAlign: 'center',
  },
})
export default ScoreView