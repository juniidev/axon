import { type ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";
import { AuthPage } from "../pages/AuthPage";

type Props = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-white">Loading...</div>;

  if (!user) return <AuthPage />;

  return <>{children}</>;
};