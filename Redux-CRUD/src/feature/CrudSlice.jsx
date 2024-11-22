import { createSlice } from "@reduxjs/toolkit";

export const crudSlice = createSlice({
  name: "crudSlice",
  initialState: {
    student: [], // This is the array you're managing
  },
  reducers: {
    addData: (state, action) => {
      state.student.push(action.payload);   
    console.log(action.payload);
    },
    deleteData:(state,action)=>{
        console.log(action.payload);
        let data = state.student.filter((e)=> e.id != action.payload)
        state.student=data
    },
    
    EditData:(state,action)=>{
        console.log(action.payload.id);
       
        let data = state.student.map((e)=> e.id == action.payload.id ? {...e,name: action.payload.name, age: action.payload.age}:e)
        state.student = data


    }
  },
});

export const { addData,deleteData,EditData } = crudSlice.actions;
export default crudSlice.reducer;
