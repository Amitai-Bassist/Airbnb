import { storageService } from '../../services/async-storage.service'
import { stayService } from '../../services/stay.service.local'
import { utilService } from '../../services/util.service'

export function getActionRemoveStay(stayId) {
    return {
        type: 'removeStay',
        stayId
    }
}
export function getActionAddStay(stay) {
    return {
        type: 'addStay',
        stay
    }
}
export function getActionUpdateStay(stay) {
    return {
        type: 'updateStay',
        stay
    }
}

export function getActionAddStayMsg(stayId) {
    return {
        type: 'addStayMsg',
        stayId,
        txt: 'Stam txt',
        filterBy: null,
        currStay: null
    }
}

export const stayModule = {
    state: {
        stays: [],
        stayReveiwScore: null,
        demoAmenities:[]
    },
    getters: {
        stays({stays}) { return stays },
        currStay({currStay}) { return currStay },
        reviewScore({stayReveiwScore}) {return stayReveiwScore},
        demoAmenities({demoAmenities}) {return demoAmenities}
    },
    mutations: {
        setStays(state, { stays }) {
            state.stays = stays
        },
        setStay(state, { stay }) {
            state.currStay = stay
        },
        addStay(state, { stay }) {
            state.stays.push(stay)
        },
        updateStay(state, { stay }) {
            const idx = state.stays.findIndex(c => c.id === stay._id)
            state.stays.splice(idx, 1, stay)
        },
        removeStay(state, { stayId }) {
            state.stays = state.stays.filter(stay => stay._id !== stayId)
        },
        addStayMsg(state, { stayId , msg}) {
            const stay = state.stays.find(stay => stay._id === stayId)
            if (!stay.msgs) stay.msgs = []
            stay.msgs.push(msg)
        },
        getReviewScore(state,{stayReviews}){
            let reviewNum = 0
            let stayReveiwScore = 0 
            stayReviews.forEach(review => {
                reviewNum++
                stayReveiwScore += (review.rate.Cleanliness+ review.rate.Communication+ review.rate.CheckIn+ review.rate.Accuracy+ review.rate.Location+ review.rate.Value)/6
            })
            state.stayReveiwScore = (stayReveiwScore/reviewNum).toFixed(1)
        },
        getDemoAmenities(state){
            state.demoAmenities = storageService.getDemoAmenities()
        },
        setFilterBy(state,{filter}){
            state.filterBy = filter
        },
    },
    actions: {
        async addStay(context, { stay }) {
            try {
                stay = await stayService.save(stay)
                context.commit(getActionAddStay(stay))
                return stay
            } catch (err) {
                console.log('stayStore: Error in addStay', err)
                throw err
            }
        },
        async updateStay(context, { stay }) {
            try {
                stay = await stayService.save(stay)
                context.commit(getActionUpdateStay(stay))
                return stay
            } catch (err) {
                console.log('stayStore: Error in updateStay', err)
                throw err
            }
        },
        async loadStays({commit,state,rootState}, {filterBy}) {
            try {
                const stays = await stayService.query(filterBy)
                console.log(stays);
                commit({ type: 'setStays', stays })
            } catch (err) {
                console.log('stayStore: Error in loadStays', err)
                throw err
            }
        },
        async getStayById({commit,state,rootState}, {stayId}) {
            try {
                const stay = await stayService.getById(stayId)
                
                commit({ type: 'setStay', stay })
            } catch (err) {
                console.log('stayStore: Error in getStayById', err)
                throw err
            }
        },
        async removeStay(context, { stayId }) {
            try {
                await stayService.remove(stayId)
                context.commit(getActionRemoveStay(stayId))
            } catch (err) {
                console.log('stayStore: Error in removeStay', err)
                throw err
            }
        },
        async addStayMsg(context, { stayId, txt }) {
            try {
                const msg = await stayService.addStayMsg(stayId, txt)
                context.commit({type: 'addStayMsg', stayId, msg })
            } catch (err) {
                console.log('stayStore: Error in addStayMsg', err)
                throw err
            }
        },

    }
}