import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const {id, name, icon} = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        }
    }
})

export const selectTopics = (state) => {
    return state.topics.topics
}

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;