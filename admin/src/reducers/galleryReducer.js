import { ACTION_TYPES } from '../actions/galleryActions';

const INITIAL_STATE = {
  dataset: []
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case ACTION_TYPES.GALLERY_GETLIST:
      return {
        ...state,
        dataset: action.payload
      };
  }

  return state;
}