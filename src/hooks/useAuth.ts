"use client";

import { useState, useEffect } from "react";
import { axiosInstance } from "@/lib/utils";
import Cookies from "js-cookie";

interface User {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_superuser: boolean;
}

interface UseUserFromTokenResult {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const useAuth = (): UseUserFromTokenResult => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get("access_token");
      console.log(token);
      if (!token) {
        setError("No token found");
        setLoading(false);
        return;
      }

      try {
        const response = await axiosInstance.get("api/get-user-from-token/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch user data");
        setLoading(false);
      }
    };

    fetchUser();
  }, []); // Este efecto se ejecuta solo una vez cuando el componente se monta

  return { user, loading, error };
};

export default useAuth;
