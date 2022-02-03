import { User } from '../../types';

export function hasRole(user: User, roles: string[] = []) {
  return roles.some((role) => user.roles?.includes(role));
}
