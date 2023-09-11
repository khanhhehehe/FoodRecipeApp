const valueFilter = {
    value: ''
}

export const FILTER_REDUCER = (state = valueFilter, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                ...state,
                value: action.payload,
            };

        default:
            return state;
    }
};
