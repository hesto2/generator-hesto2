import { createContext, useState, useContext } from 'react';
import { Session } from '../types';
import { getToken } from '../utils/tokenUtils';

const token = getToken();
export const SessionContext = createContext<
  [Session | null, (session: Session | null) => void]
>([null, () => {}]);

export const useSessionState = () => {
  const sessionState = useState<Session | null>(token ? { token } : null);
  return sessionState;
};

export const useSession = () => {
  return useContext(SessionContext);
};
