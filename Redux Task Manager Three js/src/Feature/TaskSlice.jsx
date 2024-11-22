import { createSlice } from "@reduxjs/toolkit";


export const taskslice = createSlice({
    name: "taskslice",
    initialState: {
        taskData: [],
        editId: null,
        name: '',
        age: '',
        enterTask: '',
        gender: 'male',
        priority: 'high'
    },
    reducers: {
        addData: (state, action) => {
            state.taskData.push(action.payload)
        },
        deleteData: (state, action) => {
            let delData = state.taskData.filter((e) => e.id != action.payload)
            state.taskData = delData
        },
        updateData: (state, action) => {
            let ind = state.taskData.findIndex((el)=>el.id === action.payload.id)
            state.taskData[ind] = action.payload
            state.editId = 0;  
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        setAge: (state, action) => {
            state.age = action.payload
        },
        setEnterTask: (state, action) => {
            state.enterTask = action.payload
            
        },
        handleGender: (state, action) => { 
            state.gender = action.payload
            
        },
        setPriority: (state, action) => {
            state.priority = action.payload
        },
        setEditId: (state, action) => {
            state.editId = action.payload
        }
    }
})

export const { addData, deleteData, updateData, setName,setAge,setEnterTask,handleGender,setPriority,setEditId } = taskslice.actions
export default taskslice.reducer

