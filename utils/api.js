import { AsyncStorage } from 'react-native'
import { formatDeckResults, DECKS_STORAGE_KEY } from './helpers'

export function fetchDecks () {
  console.log("fetching from storage")
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDeckResults)
}

export function saveDeck (deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [deck.title]: {
      title: deck.title,
      questions: deck.questions
    }
  }))
}

export function saveCard ({ title, card }) {
  AsyncStorage.getItem(DECKS_STORAGE_KEY, (result) => {
    if (result !== null) {
      const ques = JSON.parse(result).questions
      const newList = ques.concat(card);
      return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
          title,
          questions: newList
        }
      }))
    }
    console.log('Data Not Found');
  });
}