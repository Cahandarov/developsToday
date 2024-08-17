import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizLibraryMainPage: true,
};

const createQuizSlice = createSlice({
  name: "addQuiz",
  initialState,
  reducers: {
    setQuizLibraryMainPage(state, action) {
      state.quizLibraryMainPage = action.payload;
    },
  },
});
export const { setQuizLibraryMainPage } = createQuizSlice.actions;
export default createQuizSlice.reducer;

// const quizzes = useSelector((state) => state.quizzes.quizzes);

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;
