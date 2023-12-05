const initialState = {
  isDeleteMode: false,
  pieceInfo: {
    isSparePiece: false,
    isToggleSparePiece: false,
    sparePiece: null
  },
  showPopup: false
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PIECE_INFO':
      const newSparePiece = action.data;
      const toggleSparePiece = newSparePiece === state.pieceInfo.sparePiece ? !state.pieceInfo.isToggleSparePiece : false

      return {
        ...state,
        pieceInfo: {
          isSparePiece:  !toggleSparePiece,
          isToggleSparePiece: toggleSparePiece,
          sparePiece: action.data
        }
      };
    case 'TOGGLE_DELETE_MODE':
      return {
        ...state,
        isDeleteMode: !state.isDeleteMode,
        pieceInfo: {
          pieceInfo: {
            ...state.pieceInfo,
            isSparePiece: false
          },
        }
      };
    case 'SET_DELETE_MODE_FALSE':
      return {
        ...state,
        isDeleteMode: false,
      };
    case 'TOGGLE_POPUP':
      return {
        ...state,
        showPopup: !state.showPopup,
        popupStatus: action.status
      };
    default:
      return state;
  }
}
