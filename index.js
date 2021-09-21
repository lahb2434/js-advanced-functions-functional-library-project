const objectKind = (collection) => (
  collection instanceof Array ? collection : myValues(collection)
)

let myEach = ( obj, callBackFnc ) => {
  let collection = objectKind(obj);
  for( let x = 0; x < mySize(collection); x++ ) {
    callBackFnc( collection[x] )
  }
  return obj
}

let myMap = (obj, callBackFnc) => {
  let collection = objectKind(obj);
  let newCollection = [];
  for ( let x = 0; x < mySize(collection); x++ ) {
    newCollection.push( callBackFnc( collection[x] ) )
  }
  return newCollection
}

let myReduce = ( obj, callBackFnc, accumulator ) => {
  let collection = objectKind(obj);
  if(!accumulator){ accumulator = collection.shift()};
  for ( let x = 0; x < mySize(collection); x++ ) {
    accumulator = callBackFnc( accumulator, collection[x] ) 
  }
  return accumulator
}

let myFind = ( obj, callBackFnc) => {
  let collection = objectKind(obj);
  for ( let x = 0; x < mySize(collection); x++ ) {
    if (callBackFnc(collection[x])) return collection[x] 
  }
  return undefined
} 

let myFilter = ( obj, callBackFnc) => {
  let collection = objectKind(obj);
  let newCollection = [];
  for ( let x = 0; x < mySize(collection); x++ ) {
    if (callBackFnc(collection[x])) {
      newCollection.push( collection[x] )
    } 
  }
  return newCollection
}

let mySize = ( obj ) => {
  let collection = objectKind(obj);
  for (let x = 0; ; x++) {
    if (typeof collection[x] === 'undefined') return x   
  }
}

let myFirst = ( obj, arg ) => {
  let collection = objectKind(obj);
  if (arg){
    let newCollection = [];
    for ( let x = 0; x < arg; x++ ) {
      newCollection.push( collection[x] )   
    }
    return newCollection
  }
  return collection[0]
}

let myLast = ( obj, arg ) => {
  let collection = objectKind(obj);
  let collectionSize = mySize(collection);
  if (arg){
    let newCollection = [];
    for ( let x = collectionSize - arg; x < collectionSize; x++ ) {
      newCollection.push( collection[x] )   
    }
    return newCollection
  }
  return collection[collectionSize - 1]
}

let myKeys = (obj) => {
    let objKeys = [];
    for(let x in obj) {
      objKeys.push(x)
    }
    return objKeys
  }

  let myValues = (obj) => {
    let objValues = [];
    for(let x in obj) {
      objValues.push(obj[x])
    }
    return objValues
  }