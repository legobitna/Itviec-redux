const getJobData = () => async (dispatch) => {
  // dispatch({ type: types.BLOG_REQUEST, payload: null });
  try {
    let url = `http://localhost:3001/jobs`;
    console.log("url", url);
    let data = await fetch(url);
    let result = await data.json();
    console.log("rr", result);
    dispatch({ type: "JOB_REQUEST_SUCCESS", payload: result });
  } catch (error) {
    console.log("error", error);
    //   dispatch({ type: types.BLOG_REQUEST_FAILURE, payload: error });
  }
};

const getSingleJob = (id) => async (dispatch) => {
  try {
    let url = `http://localhost:3001/jobs/${id}`;
    let data = await fetch(url);
    let result = await data.json();
    console.log("rr", result);
    dispatch({ type: "SINGLE_JOB_REQUEST_SUCCESS", payload: result });
  } catch (error) {
    console.log("error", error);
  }
};
export const jobAction = {
  getJobData,
  getSingleJob,
};
