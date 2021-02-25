import { Session } from '../types';
import { getToken } from '../utils/tokenUtils';
import { createContext, useState, useContext } from 'react';

type SessionContextReturn = {
  session: Session | null;
  setSession: (update: Session) => void;
};

export const SessionContext = createContext<SessionContextReturn>({
  session: null,
  setSession: (_session) => null,
});

export const useSessionState = () => {
  const token = getToken();
  const [session, setSession] = useState<Session | null>(
    token ? { token } : null
  );
  return { session, setSession };
};

export const useSession = () => {
  return useContext(SessionContext);
};
