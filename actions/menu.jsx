import { types } from '../types/types';

export const menuToggle = (value) => {
    if (value === true) {
        return ({
            type: types.menuOn
        })
    } else {
        return ({
            type: types.menuOff
        })
    }
}

export const menuOff = () => ({
    type: types.menuOff
})