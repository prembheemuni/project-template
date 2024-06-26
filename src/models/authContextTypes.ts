import { ReactNode } from "react";

export interface AuthContextType {
  children: ReactNode;
}

export interface authType {
  auth?: { userName?: string };
  setUsername: (name: string) => void;
}
