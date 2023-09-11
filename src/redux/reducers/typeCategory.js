const typecategory = {
    typeCat: 0
}

export const TYPE_REDUCER = (state = typecategory, action) => {
    switch (action.type) {
        case 'SET_TYPECAT':
            return {
                ...state,
                typeCat: action.payload,
            };

        default:
            return state;
    }
};
