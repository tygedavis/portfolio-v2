const initialState = {
    shouldShowNavigationMobileDisplay: false
};

export default function cardDisplays(state = initialState, action) {
    switch (action.type) {
        case 'navigation/toggleNavigationShelfMobile': {
            return {
                ...state,
                shouldShowNavigationMobileDisplay: action.payload
            }
        }
        default:
            return state
    }
}