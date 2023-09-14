import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Admin = () => {
  const { pathname, push } = useRouter();
  useEffect(() => {
    if (pathname.includes('/admin')) push('/admin/login');
  }, []);

  return;
};

export default Admin;
