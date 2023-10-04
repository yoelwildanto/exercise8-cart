import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker/locale/id_ID";
import { cartReducer }    from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(14)].map(() => ({// array(3) maksudnya ada 3 data faker
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(15000,999999,0),
    image: faker.image.image(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  // const [productState, productDispatch] = useReducer(productReducer, {
  //   byStock: false,
  //   byFastDelivery: false,
  //   byRating: 0,
  //   searchQuery: "",
  // });

  // console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch}}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
