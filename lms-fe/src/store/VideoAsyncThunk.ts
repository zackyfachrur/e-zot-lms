import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Video } from "@type/StoreType";

const API_URL = `http://127.0.0.1:3658/m2/855410-836210-default/15160736`;

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const editVideo = createAsyncThunk(
  "videos/editVideo",
  async (video: Video) => {
    const response = await axios.put(`${API_URL}/${video.product_id}`, video);
    return response.data;
  }
);

export const addVideo = createAsyncThunk(
  "videos/addVideo",
  async (video: Video) => {
    const response = await axios.post(API_URL, video);
    return response.data;
  }
);

// Async Thunk untuk menghapus video
export const deleteVideo = createAsyncThunk<string, string>(
  "videos/deleteVideo",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);
