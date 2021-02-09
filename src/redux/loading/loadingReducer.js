import { createReducer } from "@reduxjs/toolkit";
import {} from "../auth/authActions";

const loadingReducer = createReducer(false, {});
export default loadingReducer;
