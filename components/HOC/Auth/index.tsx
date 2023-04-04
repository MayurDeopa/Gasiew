import { LoadingDots } from '@/components/feedback';
import { useAuthState } from '@/context/auth/AuthProvider';
import React, { ComponentType, FC } from 'react';


const withAuth = (
  Component: ComponentType,
): FC => (props) => {
    const {isAuthorized,isLoading} = useAuthState()
    

    if(isLoading){
      return <LoadingDots color='secondary'/>
    }

    
    if (isAuthorized) {
      return <Component {...props} />;
    }

    return <p>Please login</p>
    
  };

export default withAuth;