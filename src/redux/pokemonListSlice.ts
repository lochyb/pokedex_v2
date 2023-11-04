import { createSlice } from "@reduxjs/toolkit";
import { NamedAPIResource, Pokemon } from "pokenode-ts";

export interface PokemonListState {
  pokemon: Pokemon[] | [];
  chunkedGenerationResourceList: NamedAPIResource[][] | null;
  pages: number;
  range: string;
}

const initialState: PokemonListState = {
  pokemon: [],
  chunkedGenerationResourceList: null,
  pages: 1,
  range: "1 - 1276",
};

export const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
    setPokemonGenerationList: (state, action) => {
      state.chunkedGenerationResourceList = action.payload;
    },
    setPages: (state, action: { payload: number }) => {
      state.pages = action.payload;
    },
    setRange: (state, action: { payload: string }) => {
      state.range = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPokemon, setPokemonGenerationList, setPages, setRange } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;
