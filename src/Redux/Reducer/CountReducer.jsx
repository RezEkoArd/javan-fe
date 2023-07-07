const hitung = {
    nilai: 0,
};


const CountReducer = (state = hitung, action) => {
  switch (action.type) {
    case "Tambah" : 
        return {
            ...state,
            nilai: state.nilai + 1,
        };
    case "Kurang" : 
    return {
        ...state,
        nilai: state.nilai === 0 ? state.nilai - 0 : state.nilai - 1,
        };
    default: 
        return state;
  }
}

export default CountReducer