import { Type } from "./action.type";


const savedBasket = JSON.parse(localStorage.getItem('basket')) || [];

export const initialState = {
  basket: savedBasket,
  user: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      {
        // check if the item is already in the basket
        const existingItem = state.basket.find(
          (item) => item.id === action.item.id
        );
        
        // If the item is not in the basket, add it with an amount of 1
        if (!existingItem) {
          const updatedBasket = [...state.basket, { ...action.item, amount: 1 }];
          
          // Save the updated basket to local storage
          localStorage.setItem('basket', JSON.stringify(updatedBasket));
          
          return {
            ...state,
            basket: updatedBasket,
          };
        } else {
          // If the item exists, increase its amount
          const updatedBasket = state.basket.map((item) => {
            return item.id === action.item.id
              ? { ...item, amount: item.amount + 1 } 
              : item;
          });
          
          // Save the updated basket to local storage
          localStorage.setItem('basket', JSON.stringify(updatedBasket));
          
          return {
            ...state,
            basket: updatedBasket, 
          };
        }
      }

    case Type.REMOVE_FROM_BASKET:
      {
        const index = state.basket.findIndex((item) => item.id === action.id);
        let newBasket = [...state.basket];

        if (index >= 0) {
          if (newBasket[index].amount > 1) {
            // If the item amount is more than 1, decrease it by 1
            newBasket[index] = {
              ...newBasket[index],
              amount: newBasket[index].amount - 1,
            };
          } else {
            // If the amount is 1, remove the item from the basket
            newBasket.splice(index, 1);
          }
        }

        // Save the updated basket to local storage
        localStorage.setItem('basket', JSON.stringify(newBasket));
        
        return {
          ...state,
          basket: newBasket, // Update the state with the new basket
        };
      }

    case Type.SET_USER:
      return {
        ...state,
        user: action.user // Update the user in the state when a user logs in or out
      }

    case Type.EMPTY_BASKET:
      
      localStorage.setItem('basket', JSON.stringify([]));
      return {
        ...state,
        basket: [] 
      }

    default:
      return state; 
  }
}
