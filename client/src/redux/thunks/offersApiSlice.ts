import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../services/apiClient";
import { useAppSelector } from "../hooks";
import { AxiosResponse } from "axios";

interface Offer {
  id: number;
  name: string;
  description: string;
  discount: string;
  valid_until: string;
  location: string;
  category: string;
}

interface OfferState {
  data: Offer[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  data: [],
  loading: "idle",
} satisfies OfferState as OfferState;

// this getOffers itselt behave like a slice and it provides 3 cases fullfilled and pending and success.
// these there can be accessed by the other slice in the extra reducers
export const getOffers = createAsyncThunk("offers/api", async (thunkAPI) => {
  const data: AxiosResponse<Offer[]> = await Axios.get<Offer[]>("/offers");
  return data;
});

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOffers.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getOffers.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(getOffers.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const getOffersData = () => useAppSelector((state) => state.offers);
