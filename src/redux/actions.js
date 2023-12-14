export const setPieceInfo = (data) => ({ type: 'SET_PIECE_INFO', data });

export const setDeleteModeFalse = () => ({ type: 'SET_DELETE_MODE_FALSE' });

export const setPopupStatus = (status) => ({ type: 'SET_POPUP_STATUS', status });

export const toggleDeleteMode = () => ({ type: 'TOGGLE_DELETE_MODE' });

export const togglePopup = (status) => ({ type: 'TOGGLE_POPUP', status });
