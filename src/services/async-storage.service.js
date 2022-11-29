export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

function query(entityType, delay = 500) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || getDemoStays()
    _save('stay',entities)
    return new Promise(resolve => setTimeout(() => resolve(entities), delay))
}

function get(entityType, entityId) {
    return query(entityType).then(entities => {
        const entity = entities.find(entity => entity._id === entityId)
        if (!entity) throw new Error(`Get failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        return entity
    })
}

function post(entityType, newEntity) {
    newEntity = JSON.parse(JSON.stringify(newEntity))    
    newEntity._id = _makeId()
    return query(entityType).then(entities => {
        entities.push(newEntity)
        _save(entityType, entities)
        return newEntity
    })
}

function put(entityType, updatedEntity) {
    updatedEntity = JSON.parse(JSON.stringify(updatedEntity))    
    return query(entityType).then(entities => {
        const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
        if (idx < 0) throw new Error(`Update failed, cannot find entity with id: ${updatedEntity._id} in: ${entityType}`)
        entities.splice(idx, 1, updatedEntity)
        _save(entityType, entities)
        return updatedEntity
    })
}

function remove(entityType, entityId) {
    return query(entityType).then(entities => {
        const idx = entities.findIndex(entity => entity._id === entityId)
        if (idx < 0) throw new Error(`Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        entities.splice(idx, 1)
        _save(entityType, entities)
    })
}

// Private functions

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function getDemoStays(){
return [{
    "_id": "10006546",
    "name": "amitai house",
    "type": "House",
    "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"],
    "price": 80.00,
    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
    "capacity": 8,
    "amenities": [
      "TV",
      "Wifi",
      "Kitchen",
      "Smoking allowed",
      "Pets allowed",
      "Cooking basics"
    ],
    "labels": [
      "Top of the world",
      "Trending",
      "Play",
      "Tropical"
    ],
    "host": {
      "_id": "XCdXV",
      "fullname": "Muki G",
      "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
    },
    "loc": {
      "country": "Portugal",
      "countryCode": "PT",
      "city": "Porto",
      "address": "17 Kombo st",
      "lat": -8.61308,
      "lng": 41.1413
    },
    "reviews": [
      {
        "id": "madeId",
        "txt": "Very helpful hosts. Cooked traditional...",
        "rate": 4,
        "by": {
          "_id": "u102",
          "fullname": "user2",
          "imgUrl": "/img/img2.jpg"
        }
      }
    ],
    "likedByUsers": ['mini-user'] // for user-wishlist : use $in
  },
  {
    "_id": "1000654",
    "name": "Ribeirax",
    "type": "House",
    "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"],
    "price": 80.00,
    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
    "capacity": 8,
    "amenities": [
      "TV",
      "Wifi",
      "Kitchen",
      "Smoking allowed",
      "Pets allowed",
      "Cooking basics"
    ],
    "labels": [
      "Top of the world",
      "Trending",
      "Play",
      "Tropical"
    ],
    "host": {
      "_id": "u101",
      "fullname": "Davit Pok",
      "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
    },
    "loc": {
      "country": "Portugal",
      "countryCode": "PT",
      "city": "Porto",
      "address": "17 Kombo st",
      "lat": -8.61308,
      "lng": 41.1413
    },
    "reviews": [
      {
        "id": "madeId",
        "txt": "Very helpful hosts. Cooked traditional...",
        "rate": 4,
        "by": {
          "_id": "u102",
          "fullname": "user2",
          "imgUrl": "/img/img2.jpg"
        }
      }
    ],
    "likedByUsers": ['mini-user'] // for user-wishlist : use $in
  },
  {
    "_id": "10086546",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
    "price": 80.00,
    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
    "capacity": 8,
    "amenities": [
      "TV",
      "Wifi",
      "Kitchen",
      "Smoking allowed",
      "Pets allowed",
      "Cooking basics"
    ],
    "labels": [
      "Top of the world",
      "Trending",
      "Play",
      "Tropical"
    ],
    "host": {
      "_id": "u101",
      "fullname": "Davit Pok",
      "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
    },
    "loc": {
      "country": "Portugal",
      "countryCode": "PT",
      "city": "Porto",
      "address": "17 Kombo st",
      "lat": -8.61308,
      "lng": 41.1413
    },
    "reviews": [
      {
        "id": "madeId",
        "txt": "Very helpful hosts. Cooked traditional...",
        "rate": 4,
        "by": {
          "_id": "u102",
          "fullname": "user2",
          "imgUrl": "/img/img2.jpg"
        }
      }
    ],
    "likedByUsers": ['mini-user'] // for user-wishlist : use $in
  }
]
}