const loggedinuserdata = {};

const loginreducer = (state = loggedinuserdata, action) => {
  const userdata = action.payload;

  switch (action.type) {
    case "LOGIN":
      //   console.log(userdata);
      return {
        ...userdata,
      };

    case "LOGOUT":
      return {};

    default:
      return state;
  }
};

export default loginreducer;
