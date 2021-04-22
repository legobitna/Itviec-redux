const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING_REQUEST":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      console.log("payload", payload);
      // state.user = payload;
      return { ...state, user: payload };
    case "LOGIN_FAIL":
      console.log("payload", payload);
      return { ...state, error: payload, loading: false };

    default:
      return state; // if you dont have it, you will get undefine error at useSElector
  }
};

export default authReducer;
