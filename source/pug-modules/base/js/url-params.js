/*

  initSearchParams - превращаем параметр search в объект
  updateSearchParams - обновляем парметры search / превращаем в строку / записываем в search

  вид записи searchParams['key'] = value
*/

const initSearchParams = function() {
  const searchParams = location.search.substr(1).split('&');
  let searchParamsObj = {};
  let i;

  for ( i in searchParams ) {
    let pair;

    if ( searchParams[i] === '' ) continue;

    pair = searchParams[i].split('=');
    searchParamsObj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair[1] );
  }

  return searchParamsObj;
}


const updateSearchParams = function(searchParams) {
  if ( arguments.length === 0 ) {
    return false;
  }

  // TODO escapeURL к каждому значению
  let newParams;
  console.log(searchParams);

  newParams = Object.keys(searchParams).map(key => {

    // if (Array.isArray(searchParams[key])) {}

    return encodeURIComponent(key) + '=' + encodeURIComponent(searchParams[key]);
  })

  window.history.replaceState(null, null, origin + '/catalog' + '?' + newParams.join('&'));
}

export { initSearchParams, updateSearchParams };