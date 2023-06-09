const cart = [];

const handlingCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);

      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "REMOVEITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    case "INCREMENT":
      const item = state.find((x) => x.id === product.id);
      if (item) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      }
      break;

    case "DECREMENT":
      const decrease = state.find((x) => x.id === product.id);
      if (decrease.qty > 1) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      } else {
        return state.filter((x) => x.id !== decrease.id);
      }

    default:
      return state;
  }
};

export default handlingCart;
