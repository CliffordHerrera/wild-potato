import React from  "react";
import { createContext, useReducer, useContext } from "react";
import type { ReactNode } from "react";

// Define state shape
type FilterState = {
    query: string;
};

// Define actions
type Action = { type: "SET_QUERY"; payload: string };


// Reducer
function filterReducer(state: FilterState, action: Action): FilterState {
    switch (action.type) {
        case "SET_QUERY":
            return { ...state, query: action.payload };
        default:
            return state;
    }
}

// Create Contexts
const FilterContext = createContext<FilterState | undefined>(undefined);
const FilterDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);

// Provider component
export function FilterProvider({ children }: {children: ReactNode}) {
  const [state, dispatch] = useReducer(filterReducer, { query: "" });

  return (
    <FilterContext.Provider value={state}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterContext.Provider>
  );
}

// Custom hooks
export function useFilter() {
    const context = useContext(FilterContext);
    if (!context) throw new Error("useFilter must be used inside FilterProvider");
    return context;
}

export function useFilterDispatch() {
    const context = useContext(FilterDispatchContext);
    if (!context) throw new Error("useFilterDispatch must be used inside FilterProvider");
    return context;
}
