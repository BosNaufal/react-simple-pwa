
const initialState = {
  sidebarOpen: false,
  searchbarOpen: false,
  searchQuery: '',
  onPostItem: false,
}

function post(state = initialState, action) {

  switch (action.type) {

    case 'TOGGLE_SIDEBAR':
      return { ...state,
        searchbarOpen: false,
        sidebarOpen: !state.sidebarOpen
      }
      break;


    case 'TOGGLE_SEARCHBAR':
      return { ...state,
        sidebarOpen: false,
        searchbarOpen: !state.searchbarOpen
      }
      break;

    case "UPDATE_SEARCH_QUERY":
      return { ...state,
        searchQuery: action.query
      }
      break;

    case "ON_POST_ITEM":
      return { ...state,
        onPostItem: true
      }
      break;

    case "ON_NETRAL_PAGE":
      return { ...state,
        onPostItem: false,
        searchQuery: ''
      }
      break;


    default:
    return state

  }

}

export default post;
