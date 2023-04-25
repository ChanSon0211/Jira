import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
import projectRequester from 'api/projectRequester';
import { ProjectType } from 'type/projectType';




export interface ProjectSliceType {
    projectList: ProjectType[] 
}

const initialState: ProjectSliceType = {
    projectList: [],
};


export const fetchAllProjectList = createAsyncThunk(
    'project/getAll',

    async (key: string , thunkAPI) => {

        const data = await projectRequester.fetchProjectList(key);


        console.log(data)

    }
)




export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    

  }
});

export const { } = projectSlice.actions;
export default projectSlice.reducer;
