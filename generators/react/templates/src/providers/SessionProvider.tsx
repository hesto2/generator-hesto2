import { Session } from '../types';
import { clearToken, getToken, persistToken } from '../utils/tokenUtils';
import { createContext, useState, useContext, useEffect } from 'react';
import { useGetMeApiCall } from '../api/users/hooks';
import { User } from '../api/users';

type SessionContextReturn = {
  token: string | null;
  user: User | null;
  setSession: (update: Partial<Session>) => void;
  loading: boolean;
};

export const SessionContext = createContext<SessionContextReturn>({
  token: null,
  user: null,
  setSession: (_session) => null,
  loading: true,
});

export const useSessionState = () => {
  const [session, setSessionRaw] = useState<Session>({
    token: getToken() || null,
    user: null,
  });

  const getMeResponse = useGetMeApiCall({
    skip: Boolean(session?.token) === false,
  });

  const setSession = (update: Partial<Session>) => {
    setSessionRaw({ ...session, ...update });
    if (update.token === null) {
      clearToken();
      setSessionRaw({ user: null, token: null });
    }
    if (update.token) {
      persistToken(update.token);
      getMeResponse.refetch();
    }
  };

  useEffect(() => {
    if (getMeResponse.data) {
      setSession({ user: getMeResponse.data });
    }
  }, [getMeResponse.data]);

  return {
    token: session.token,
    setSession,
    loading: getMeResponse.loading,
    user: session.user,
  };
};

export const useSession = () => {
  return useContext(SessionContext);
};
