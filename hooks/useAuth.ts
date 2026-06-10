import { useAuthContext } from "@/context/AuthContext";

/**
 * Hook to access auth state and actions.
 * Must be used inside AuthProvider.
 */
export function useAuth() {
  return useAuthContext();
}
