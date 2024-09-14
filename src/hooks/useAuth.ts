

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('csrftoken'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      router.push('/login'); // Redirige a la página de login si no hay usuario
    }
  }, [router]);

  return user;
};

export default useAuth;
