// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js';
import { utilService } from './util.service.js';
import { userService } from './user.service.js';

const STORAGE_KEY = 'stay';

export const stayService = {
  query,
  getById,
  save,
  remove,
  getEmptyStay,
  addStayMsg,
};
window.cs = stayService;

async function query(filterBy = { txt: '' }) {
  console.log('filterBy', filterBy);
  return httpService.get(STORAGE_KEY, filterBy);

  // var stays = await storageService.query(STORAGE_KEY)
  // if (filterBy.txt) {
  //     const regex = new RegExp(filterBy.txt, 'i')
  //     stays = stays.filter(stay => regex.test(stay.vendor) || regex.test(stay.description))
  // }
  // if (filterBy.price) {
  //     stays = stays.filter(stay => stay.price <= filterBy.price)
  // }
  // return stays
}
function getById(stayId) {
  // return storageService.get(STORAGE_KEY, stayId)
  return httpService.get(`stay/${stayId}`);
}

async function remove(stayId) {
  // await storageService.remove(STORAGE_KEY, stayId)
  return httpService.delete(`stay/${stayId}`);
}
async function save(stay) {
  var savedStay;
  if (stay._id) {
    // savedStay = await storageService.put(STORAGE_KEY, stay)
    savedStay = await httpService.put(`stay/${stay._id}`, stay);
  } else {
    // Later, owner is set by the backend
    stay.host = userService.getLoggedinUser();
    // savedStay = await storageService.post(STORAGE_KEY, stay)
    savedStay = await httpService.post('stay', stay);
  }
  return savedStay;
}

async function addStayMsg(stayId, txt) {
  const savedMsg = await httpService.post(`stay/${stayId}/msg`, { txt });
  return savedMsg;
}

function getEmptyStay() {
  return {
    name: '',
    type: '',
    imgUrls: [],
    price: '',
    summary: '',
    capacity: 1,
    delivery: '',
    amenities: [],
    bathrooms: 1,
    bedrooms: 1,
    roomType: '',
    loc: {
      country: '',
      countryCode: '',
      city: '',
      address: '',
      lat: 20,
      lan: 156,
    },
    reviews: [],
    likedByUsers: [],
  };
}
