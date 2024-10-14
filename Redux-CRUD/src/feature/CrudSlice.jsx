import { createSlice } from "@reduxjs/toolkit";

export const crudSlice = createSlice({
 
    name: "crudSlice",
    initialState: {
        data : []
    },
    reducers: {
        addData: (state,actions) =>{
            console.log(actions.payload)
            state.data.push(actions.payload)

        },
        deleteData:(state,actions)=>{
           let delData = state.data = state.data.filter(item => item.id !== actions.payload)
            state.data= delData
        }

        
    }

}) 
export const {addData,deleteData} = crudSlice.actions
export default crudSlice.reducer;