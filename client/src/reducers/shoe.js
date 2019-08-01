import {
  GET_SHOES,
  GET_SHOE,
  SHOE_ERROR,
  GET_SHOES_SAME_MODEL
} from '../actions/types';

const initialState = {
  selectedShoe: null, // for the latest shoe you clicked on // maybve change it to {} instead of null later
  shoes: [], // for all the shoes
  loadingShoes: true,
  error: {},
  shoesWithModel: [],
  loadingShoesWithModel: true,
  loadingSelectedShoe: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SHOES:
      return {
        ...state,
        shoes: payload,
        loadingShoes: false,
        loadingShoesWithModel: true,
        selectedShoe: null
      };
    case GET_SHOE:
      return {
        ...state,
        selectedShoe: payload,
        loadingSelectedShoe: false
      };
    case GET_SHOES_SAME_MODEL:
      return {
        ...state,
        shoesWithModel: payload,
        loadingShoesWithModel: false
      };
    case SHOE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    default:
      return state;
  }
}
