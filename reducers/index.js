import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

export default function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK: {
      const { deck } = action.deck
      return {
        ...state,
        [deck.title]: deck,
      }
    }
    case ADD_CARD: {
      const { question, answer, deckKey } = action.card
      console.log("In REDUCER - deck key: ", deckKey)
      console.log("State: ", state)
      console.log("State at key: ", state[deckKey])
      return {
        ...state,
        [deckKey]: {
          ...state[deckKey],
          questions: state[deckKey].questions.concat({
            question,
            answer
          })
        }
      }
    }
    default:
      return state
  }
}