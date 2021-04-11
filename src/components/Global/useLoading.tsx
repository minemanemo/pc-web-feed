import React, { useContext, useMemo } from 'react';
import DefaultContext, { ContextI, LoadingModal } from './Context';

const useLoading = (Context?: React.Context<ContextI>): LoadingModal => {
  const context = useContext(Context || DefaultContext);
  const loading = useMemo(() => {
    return context.loading;
  }, [context]);
  return loading;
};

export default useLoading;
