import { LoadingDots } from '@/components/feedback';
import { useAuthState } from '@/context/auth/AuthProvider';
import React, {  ComponentType } from 'react';

interface Props  {
  // Define any props that your wrapped component will receive
  
}

const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P & Props>
): ComponentType<P & Props> => {
  const AuthenticatedComponent = (props: P & Props) => {
    const {isAuthorized,isLoading} = useAuthState()

    if(isLoading){
      return <LoadingDots color='any'/>
    }

    if (isAuthorized) {
      // If authenticated, render the wrapped component
      return <WrappedComponent {...props} />;
    } 

    return <p>Please login</p>
  };

  return AuthenticatedComponent;
};

export default withAuth;
