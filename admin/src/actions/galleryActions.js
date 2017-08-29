import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

export const ACTION_TYPES = {
  GALLERY_GETLIST: 'GALLERY_GETLIST'
};

export function getListAction() {
  return function(dispatch) {
    axios.get(`${API_URL}/galleries`)
      .then(response => {
        dispatch({
          type: ACTION_TYPES.GALLERY_GETLIST,
          payload: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
}