export const addCart = (Product) => {
  return {
    type: "ADDITEM",
    payload: Product,
  };
};

export const removeCart = (Product) => {
  return {
    type: "REMOVEITEM",
    payload: Product,
  };
};

export const increment = (product) => {
  return {
    type: "INCREMENT",
    payload: product,
  };
};

export const decrement = (product) => {
  return {
    type: "DECREMENT",
    payload: product,
  };
};

export const login = (userdata) => {
  return {
    type: "LOGIN",
    payload: userdata,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
