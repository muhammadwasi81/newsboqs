import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = localStorage.getItem('token');

      if (!Boolean(isAuthenticated)) router.push('/admin/login');
      else router.push('/admin/article');
    }, []);

    return <WrappedComponent {...props} />;
  };

  // Set the displayName for the HOC
  WithAuth.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithAuth;
};

export default withAuth;
