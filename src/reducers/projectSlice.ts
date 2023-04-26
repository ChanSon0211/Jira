import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
import projectRequester from 'api/projectRequester';
import { ProjectType } from 'type/projectType';




export interface ProjectSliceType {
    projectList: ProjectType[],
    isLoading: boolean,
}

const initialState: ProjectSliceType = {
    projectList: [],
    isLoading: false,
};


export const fetchAllProjectList = createAsyncThunk(
    'project/getAll',

    async (key: string , thunkAPI) => {

        const data = await projectRequester.fetchProjectList(key);
        return data.data.content

    }
)




export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProjectList.pending, (state, action) => {
        state.isLoading = true
    });

    builder.addCase(fetchAllProjectList.fulfilled, (state, {type, payload} ) => {
        state.projectList = payload;
        state.isLoading = false;
    });

    builder.addCase(fetchAllProjectList.rejected, (state, {type, payload}) => {
        state.isLoading = false;
    })
    

  }
});

export const { } = projectSlice.actions;
export default projectSlice.reducer;
