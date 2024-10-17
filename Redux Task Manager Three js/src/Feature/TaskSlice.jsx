import { createSlice } from "@reduxjs/toolkit";


export const taskslice = createSlice({
    name:"taskslice",
    initialState:{
        taskData:[]
    },
    reducers:{
        addData:(state,action)=>{
            console.log(action.payload);
            state.taskData.push(action.payload)
            

        },
        deleteData:(state,action)=>{
            console.log(action.payload);
            let delData = state.taskData.filter((e)=> e.id != action.payload)
            state.taskData = delData
            

        },
        updateData:(state,action)=>{

        },
        

    }
})

export const {addData,deleteData,updateData} = taskslice.actions
export default taskslice.reducer