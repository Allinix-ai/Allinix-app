import type { StoreApi, UseBoundStore } from "zustand";

/*
  Zustand recommends using selectors for calling state/actions for optimal performance
  Reference: https://docs.pmnd.rs/zustand/guides/auto-generating-selectors
*/
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    store.use[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};
