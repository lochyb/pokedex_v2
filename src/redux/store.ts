import { configureStore } from "@reduxjs/toolkit";

import pokemonReducer from "./pokemonSlice.ts";
import pokemonListReducer from "./pokemonListSlice.ts";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    pokemonList: pokemonListReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
