import { orderService } from '../../services/order.service.local'


export const orderModule = {
    state: {
         orders: [],
         currOrder:null
    },
    getters: {
         orders({ orders }) { return orders },
         currOrder({currOrder}){return currOrder}
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders =  orders
        },
        addOrder(state, { order }) {
            state.orders.push( order)
            state.currOrder = order
        },
        removeOrder(state, { orderId }) {
            state.orders = state.orders.filter( order => order._id !== orderId)
        },
    },
    actions: {
        async addOrder(context, { order }) {
          console.log('stayOrder');
            try {
                order = await orderService.save(order)
                context.commit({ type: 'addOrder', order })
                context.dispatch({ type: 'increaseScore' })

                return order
            } catch (err) {
                console.log(' orderStore: Error in addOrder', err)
                throw err
            }
        },
        async loadOrders(context) {
            try {
                const orders = await orderService.query()
                context.commit({ type: 'setOrders',  orders })
            } catch (err) {
                console.log(' orderStore: Error in loadOrders', err)
                throw err
            }
        },
        async removeOrder(context, { orderId }) {
            try {
                await orderService.remove(orderId)
                context.commit({ type: 'removeOrder', orderId })
            } catch (err) {
                console.log('orderStore: Error in removeOrder', err)
                throw err
            }
        },

        async getHostOrders(context, { userId }) {
          try {
            const orders = await orderService.query({ text: '' });
            console.log('orders', orders);
            const hostOrders = orders.filter((order) => {
              return order.hostId === userId;
            });
            return hostOrders;
          } catch (err) {
            console.log('stayStore: Error in getHostOrders', err);
            throw err;
          }
        },

    }
}