import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import searchSlice from "./searchSlice"
import chatSLice from "./chatSlice"

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        chat : chatSLice
    }
})

export default store