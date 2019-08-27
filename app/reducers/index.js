import Axios from "axios";

const ALL_CANDIES = 'ALL_CANDIES'

function getAllCandiesAC(candies) {
  return {
    type: ALL_CANDIES,
    payload: candies
  }
}

export const getAllCandiesThunk = () => {
  return async (dispatch) => {
    const { data } = await Axios.get('/api/candies');
    dispatch(getAllCandiesAC(data))
  }
}

const initialState = {
  candies: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_CANDIES:
      return { ...state, candies: [...state.candies, ...action.payload] }
    default:
      return state
  }
}
export default rootReducer
