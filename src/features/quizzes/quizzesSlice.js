import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
                state.quizzes[id] = {
                    id: id,
                    name: name,
                    topicId: topicId,
                    cardIds: cardIds
                }
        }
        
        //addQuiz action
        // addQuiz: (state, action) => {
        //     const newQuiz = {
        //         [action.payload.id]: {
        //             ...action.payload
        //         }
        //     };
        //     state.quizzes = {
        //         ...state.quizzes,
        //         ...newQuiz
        //     } 
        // }
    }
})

// create thunk here

export const addQuizForTopicId = (payload) => {
    return (dispatch) => {
        //dispatches two actions
        dispatch(addQuiz(payload)); //creates new quiz
        dispatch(
            addQuizId({
                topicId: payload.topicId,
                quizId: payload.id
            }) //associates quiz with topic
        )
    }
}

export const selectQuizzes = (state) => {
    return state.quizzes.quizzes
}

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;