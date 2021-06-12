import {ActionTypes} from '../contants/action-types'

export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products
})

export const selectedProduct = (products) => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: products
})

export const removeSelectedProducts = (products) => ({
  type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  payload: products
})