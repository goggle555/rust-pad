import { createSlice } from '@reduxjs/toolkit';
import * as z from 'zod';

import { createWebsocketResponse } from '../websocketActions';

interface State {
  forced: boolean;
  showGemThreshold: number;
  showThemeThreshold: number;
}

const ENABLED = 1.0;
const DISABLED = -1.0;

const initialState: State = {
  forced: false,
  showGemThreshold: DISABLED,
  showThemeThreshold: DISABLED,
};

const { action: wsFeatureFlags, schema: wsFeatureFlagsSchema } = createWebsocketResponse(
  'featureFlags',
  z.object({
    showGemThreshold: z.number().nullish(),
    showThemeThreshold: z.number().nullish(),
  }),
);

const slice = createSlice({
  name: 'featureFlags',
  initialState,
  reducers: {
    forceEnableAll: (state) => {
      state.forced = true;
      state.showGemThreshold = ENABLED;
      state.showThemeThreshold = ENABLED;
    },
    forceDisableAll: (state) => {
      state.forced = true;
      state.showGemThreshold = DISABLED;
      state.showThemeThreshold = DISABLED;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(wsFeatureFlags, (state, action) => {
      if (state.forced) {
        return;
      }

      const { showGemThreshold, showThemeThreshold } = action.payload;

      if (showGemThreshold) {
        state.showGemThreshold = showGemThreshold;
      }

      if (showThemeThreshold) {
        state.showThemeThreshold = showThemeThreshold;
      }
    });
  },
});

export const {
  forceEnableAll: featureFlagsForceEnableAll,
  forceDisableAll: featureFlagsForceDisableAll,
} = slice.actions;

export { wsFeatureFlagsSchema };

export default slice.reducer;
