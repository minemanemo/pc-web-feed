import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import Context, { ContextI, defaultContext } from './Context';
import { defaultLoadingOption } from './option';
import { Black, Loading } from './StyledComponents';

interface PropsI {
  children: React.ReactNode;
}

const Provider: React.FC<PropsI> = ({ children = <></> }: PropsI) => {
  const rootLoading = useRef<HTMLDivElement>(document.createElement('div'));
  const [loadingOption, setLoadingOption] = useState(defaultLoadingOption);
  const openLoading = () => setLoadingOption({ visible: true });
  const closeLoading = () => setLoadingOption({ visible: false });

  const context = useRef<ContextI>(defaultContext);
  context.current = {
    loading: { open: openLoading, close: closeLoading },
  };

  useEffect(() => {
    rootLoading.current.id = '__react-loading__';
    document.body.appendChild(rootLoading.current);

    return () => {
      if (rootLoading.current) document.body.removeChild(rootLoading.current);
    };
  }, []);

  const { current } = context;

  const LoadingModal = useMemo(
    () =>
      createPortal(
        loadingOption.visible && (
          <Black>
            <Loading />
          </Black>
        ),
        rootLoading.current,
      ),
    [loadingOption],
  );

  return (
    <Context.Provider value={current}>
      {children}
      {rootLoading.current && LoadingModal}
    </Context.Provider>
  );
};

export default Provider;
