import { createAction } from "@reduxjs/toolkit";
import { IIncrementAction } from "./counterTypes"

export const increment = createAction<IIncrementAction>('INCREMENT_COUNTER')
