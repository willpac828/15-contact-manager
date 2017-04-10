export default function reducer(state, action) {
  switch (action.type) {
  // Creates new contact. Returns as the new state action.data (a property of the action object)
  // in front of the existing contacts prop.
    case 'CONTACT@CREATE':
      return { contacts: [...state.contacts, action.data] };
  // Not sure about purpose of this one. action name seems as though it would be a search
  // action.data seems like its new data tho.
    case 'CONTACT@FIND_ALL':
      return { contacts: action.data };
      // Either returns current state or an empty array if doesn't recognize action.
    default:
      return state || { contacts: [] };
  }
}
