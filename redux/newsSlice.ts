import { PayloadAction, createSlice } from "@reduxjs/toolkit"



interface NewsItem {
    id: string,
    title: string,
    excerpt: string,
    content: string
};

interface NewsState {
    newsList: NewsItem[]
};

const initialState: NewsState = {
    newsList: []
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        addNews: (state, action: PayloadAction<NewsItem>) => {
            state.newsList.push(action.payload);
        },
        deleteNews: (state, action: PayloadAction<string>) => {
            state.newsList = state.newsList.filter(news => news.id !== action.payload);

        },
    },
});

export const {addNews, deleteNews} = newsSlice.actions;
export default newsSlice.reducer;