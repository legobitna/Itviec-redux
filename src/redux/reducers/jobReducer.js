const initialState = {
  jobList: [],
  loading: false,
  selectedJob: null,
};

const jobReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "JOB_REQUEST":
    case "SINGLE_JOB_REQUEST":
      return { ...state, loading: false };
    case "JOB_REQUEST_SUCCESS":
      console.log("payload", payload);
      return { ...state, jobList: payload };
    case "SINGLE_JOB_REQUEST_SUCCESS":
      console.log("payload", payload);
      return { ...state, selectedJob: payload };
    case "JOB_REQUEST_FAIL":
    case "SINGLE_JOB_REQUEST_FAIL":
      return { ...state, loading: false };

    default:
      return state; // if you dont have it, you will get undefine error at useSElector
  }
};

export default jobReducer;
