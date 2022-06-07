// eslint-disable-next-line default-param-last
export const Reducer = (cart = [], { type, payload }) => {
  switch (type) {
    case "ADD":
      // eslint-disable-next-line no-case-declarations
      const tempCart = cart.filter((item) => item.id === payload.id);
      if (tempCart < 1) {
        return [...cart, payload];
      }
      return cart;

    // eslint-disable-next-line no-fallthrough
    case "REMOVE":
      return cart.filter((item) => item.id !== payload.id);
    case "INCREASE":
      // eslint-disable-next-line no-case-declarations
      const tempCartTwo = cart.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return tempCartTwo;
    case "DECREASE":
      // eslint-disable-next-line no-case-declarations
      const tempCartThree = cart.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return tempCartThree;
    // eslint-disable-next-line no-fallthrough
    default:
      return cart;
  }
};
