import { types } from "../types/types"

export const searchUpdated = (search) => ({
    type: types.searchUpdated,
    payload: search
})