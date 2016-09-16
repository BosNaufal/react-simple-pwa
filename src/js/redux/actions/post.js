
import req from 'reqwest';

export function fetchList(arg){
  return function(dispatch, getState) {

    let url = window.location.origin + "/API/lists.json"
    if('caches' in window) {
      caches.match(url).then(function (res) {
        if(res) {
          console.log('THERE\'S CACHES!');
          res.json().then(function (json) {
            dispatch({ type: 'POST_LIST_UPDATE_ALL', posts: json })
            dispatch({ type: 'POST_GROUPING_CATEGORIES' })
          })
        }
      })
    }

    req('./API/lists.json', (res) => {
      dispatch({ type: 'POST_LIST_UPDATE_ALL', posts: res })
      dispatch({ type: 'POST_GROUPING_CATEGORIES' })
    })

  }
};
