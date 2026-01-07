import { getCurrentUser } from '@/lib/appwrite';
import { setUser, User } from '@sentry/react-native';
import { create } from 'zustand';

type AuthState = {
    isAuthenticated: boolean;
    user: User | null;
    isLoading: boolean;
    setIsAuthenticated: (value: boolean) => void;
    setUser: (user: User | null) => void;
    setIsLoading: (loading: boolean) => void;
    fetchingAuthenticatedUser: () => Promise<void>;
}


const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user: null,
    isLoading: true,
    setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
    setUser: (user: User | null) => set({ user }),
    setIsLoading: (value: boolean) => set({ isLoading: value }),
    fetchingAuthenticatedUser: async () => {
        try {
            console.log('Fetching authenticated user...');
            const user = await getCurrentUser();
            console.log('User fetched:', user);
            if (user) {
                set({ isAuthenticated: true, user: user as User })
            } else {
                console.log('No user found, setting isAuthenticated to false');
                set({ isAuthenticated: false, user: null })
            }
        } catch (error) {
            console.error('Error fetching authenticated user:', error);
            set({ isAuthenticated: false, user: null })
        } finally {
            set({ isLoading: false })
        }
    },
}))


export default useAuthStore;