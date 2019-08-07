import {
  GET_SHOES,
  GET_SHOE,
  SHOE_ERROR,
  GET_SHOES_SAME_MODEL,
  CLEAR_SELECTED_SHOE,
  ADD_PRODUCT_SHOES_SUCCESS,
  GET_SHOES_VARIANTS
} from '../actions/types';

const initialState = {
  selectedShoe: null, // for the latest shoe you clicked on // maybve change it to {} instead of null later
  shoes: [], // for all the shoes
  loadingShoes: true,
  error: {},
  shoesWithModel: [],
  loadingShoesWithModel: true,
  loadingSelectedShoe: true,
  isAddingShoesSuccessful: false,
  selectedShoeVariants: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SHOES:
      return {
        ...state,
        shoes: payload,
        loadingShoes: false,
        isAddingShoesSuccessful: false
        // selectedShoe: null
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
    case CLEAR_SELECTED_SHOE:
      return {
        ...state,
        selectedShoe: null,
        loadingSelectedShoe: false
      };
    case GET_SHOES_VARIANTS:
      return {
        ...state,
        selectedShoeVariants: payload
      };
    case ADD_PRODUCT_SHOES_SUCCESS:
      return {
        ...state,
        ...payload,
        isAddingShoesSuccessful: true
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
