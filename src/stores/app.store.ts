import { create } from 'zustand';

interface AppState {
    app_loading: boolean;
    setAppLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
    app_loading: false,
    setAppLoading: (loading) => set({ app_loading: loading }),
}));
