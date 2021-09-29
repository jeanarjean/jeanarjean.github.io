import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
    const key = action?.item?.itemId + action.size
    if (action.type === `ADD_TO_CART`) {
        var stateToApply = { itemsInCart: { ...state.itemsInCart } }

        stateToApply.itemsInCart[key] = {
            itemId: action.item.itemId,
            quantity: 1,
            imagePath: action.item.imagePath,
            title: action.item.title,
            price: action.item.price,
            size: action.size
        }

        state = Object.assign({}, state, stateToApply)
    } else if (action.type === `MODIFY_ITEM_QUANTITY`) {
        var quantity = parseInt(action.quantity)

        var stateToApply = { itemsInCart: { ...state.itemsInCart } }

        if (quantity == 0) {
            delete stateToApply.itemsInCart[key]
        } else {
            stateToApply.itemsInCart[key] = {
                itemId: action.item.itemId,
                quantity: quantity,
                imagePath: action.item.imagePath,
                title: action.item.title,
                price: action.item.price,
                size: action.size
            }
        }

        state = Object.assign({}, state, stateToApply)
    }

    // Calculate total
    var price = 0
    Object.keys(state.itemsInCart).map((key) => {
        var item = state.itemsInCart[key]
        price = price + item.price * item.quantity
    })

    var priceObject = { price }
    state = Object.assign({}, state, priceObject)
    return state
}

const initialState = { itemsInCart: {}, price: 0 }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
