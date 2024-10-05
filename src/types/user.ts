export const userRole = {
  ADMIN: 'admin',
  USER: 'user',
  OBSERVADOR: 'observador',
  DIRECTIVO: 'directivo',
} as const;

export type UserRole = typeof userRole[keyof typeof userRole];


export type User = {
    id: string
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    isActive: boolean;
    is_superuser: boolean; 
    userprofile: {
      role: UserRole,
      organization: string
    }
  };
  