import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TreeViewState {
  expandedItems: number[];
}

const initialState: TreeViewState = {
  expandedItems: []
};

export const treeViewSlice = createSlice({
  name: 'treeView',
  initialState,
  reducers: {
    toggleItem(state, action: PayloadAction<number>) {
      const itemId = action.payload;
      const index = state.expandedItems.indexOf(itemId);
      if (index === -1) {
        state.expandedItems.push(itemId);
      } else {
        state.expandedItems.splice(index, 1);
      }
    }
  }
});

export const { toggleItem } = treeViewSlice.actions;
