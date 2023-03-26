import Skeleton from '@/components/feedback/skeleton/Skeleton';
import { useAuthState } from '@/context/auth/AuthProvider';
import React, { useState, useEffect, ComponentType } from 'react';

interface AuthProps {
  authenticated: boolean;
}

const withAuth = <P extends AuthProps>(
  WrappedComponent: ComponentType<P>
): ComponentType<Omit<P, keyof AuthProps>> => {
  const AuthenticatedComponent = (props: Omit<P, keyof AuthProps>) => {
    const {isAuthorized,isLoading,isError} = useAuthState()


    if(isLoading){
        return <Skeleton/>  
    }

    if (!isAuthorized) {
      return <div>Please login</div>;
    }
    

    return <WrappedComponent {...(props as P)}/>;
  };

  return AuthenticatedComponent;
};

export default withAuth;
