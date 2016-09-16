
export function toggleSidebar(){
  return { type: 'TOGGLE_SIDEBAR' }
}

export function toggleSearchbar(){
  return { type: 'TOGGLE_SEARCHBAR' }
}

export function updateQuery(query){
  return { type: 'UPDATE_SEARCH_QUERY', query }
}

export function onPostItem(){
  return { type: 'ON_POST_ITEM' }
}

export function onNetralPage(){
  return { type: 'ON_NETRAL_PAGE' }
}
