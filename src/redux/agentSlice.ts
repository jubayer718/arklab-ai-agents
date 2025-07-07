
import {createSlice, PayloadAction} from '@reduxjs/toolkit'


export type Agent = {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
};


type AgentState = {
  agents: Agent[];
  search: string;
  statusFilter: string[];
  categoryFilter: string[];
  pricingModelFilter: string | null;
  loading: boolean;
}

const initialState: AgentState = {
  agents: [],
  search: '',
  statusFilter: [],
  categoryFilter: [],
  pricingModelFilter: null,
  loading: false,
}

const agentSlice = createSlice({
  name: 'agent',
  initialState,
  reducers: {
    setAgents: (state, action: PayloadAction<Agent[]>) => {
      state.agents = action.payload;
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    setStatusFilter: (state, action: PayloadAction<string[]>) => {
      state.statusFilter = action.payload;
    },

    setCategoryFilter: (state, action: PayloadAction<string[]>) => {
      state.categoryFilter = action.payload;
    },

    setPricingModelFilter: (state, action: PayloadAction<string | null>) => {
      state.pricingModelFilter = action.payload;
    },


    clearAllFilters: (state) => {
      state.search = '';
      state.statusFilter = [];
      state.categoryFilter = [];
      state.pricingModelFilter = null;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

  },
});


export const {
  setAgents,
  setSearch,
  setStatusFilter,
  setCategoryFilter,
  setPricingModelFilter,
  clearAllFilters,
  setLoading,

} = agentSlice.actions;
 

export default agentSlice.reducer;