import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants";

export function addToCart(data) {
  console.log("action", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
}

export function removeFromCart(id) {
  console.log("action", id);
  return {
    type: REMOVE_FROM_CART,
    id: id,
  };
}
