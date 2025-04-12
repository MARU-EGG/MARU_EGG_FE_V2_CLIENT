import { ComponentType, useEffect, useState } from 'react';

function withDeferred<P extends object>(WrappedComponent: ComponentType<P>) {
  return function DeferredComponent(props: P) {
    const [isDeferred, setIsDeferred] = useState(false);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsDeferred(true);
      }, 200);
      return () => clearTimeout(timeoutId);
    }, []);

    if (!isDeferred) return;

    return <WrappedComponent {...props} />;
  };
}

export default withDeferred;
