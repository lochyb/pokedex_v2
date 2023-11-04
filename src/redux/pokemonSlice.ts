import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "pokenode-ts";

export interface PokemonState {
  pokemon?: Pokemon;
}

const initialState: PokemonState = {
  pokemon: undefined,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    set: (state, action) => {
      state.pokemon = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set } = pokemonSlice.actions;

export default pokemonSlice.reducer;
