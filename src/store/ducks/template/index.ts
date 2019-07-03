import { Reducer } from 'redux';
import { TemplateState, TemplateTypes } from './types';

const INITIAL_STATE: TemplateState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<TemplateState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TemplateTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case TemplateTypes.LOAD_SUCCESS:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case TemplateTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
