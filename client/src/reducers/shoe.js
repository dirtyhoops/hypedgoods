import {
  GET_SHOES,
  GET_SHOE,
  SHOE_ERROR,
  GET_SHOES_SAME_MODEL,
  CLEAR_SELECTED_SHOE,
  ADD_PRODUCT_SHOES_SUCCESS,
  GET_SHOES_VARIANTS,
  ADD_SHOES_VARIANTS_SUCCESS,
  DONE_LOADING_SHOES,
  DONE_DELETING_SHOES,
  DONE_DELETING_VARIANT
} from '../actions/types';

const initialState = {
  selectedShoe: null, // for the latest shoe you clicked on // maybve change it to {} instead of null later
  shoes: [], // for all the shoes
  loadingShoes: true,
  error: null,
  shoesWithModel: [],
  loadingShoesWithModel: true,
  loadingSelectedShoe: true,
  isAddingShoesSuccessful: false,
  selectedShoeVariants: null,
  isAddingVariantSuccess: false,
  deletingShoes: false,
  deletingVariant: false
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SHOES:
      return {
        ...state,
        shoes: payload,
        loadingShoes: false,
        isAddingShoesSuccessful: false,
        deletingShoes: false
      };
    case DONE_LOADING_SHOES:
      return {
        ...state,
        loadingShoes: true
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
        selectedShoeVariants: payload,
        isAddingVariantSuccess: false,
        deletingVariant: false
      };
    case ADD_PRODUCT_SHOES_SUCCESS:
      return {
        ...state,
        isAddingShoesSuccessful: true
      };
    case ADD_SHOES_VARIANTS_SUCCESS:
      return {
        ...state,
        isAddingVariantSuccess: true
      };
    case SHOE_ERROR:
      return {
        ...state,
        error: payload
      };
    case DONE_DELETING_SHOES:
      return {
        ...state,
        deletingShoes: true
      };
    case DONE_DELETING_VARIANT:
      return {
        ...state,
        deletingVariant: true
      };

    default:
      return state;
  }
}
