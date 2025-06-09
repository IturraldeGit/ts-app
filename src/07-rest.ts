import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'daniel',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = (): boolean => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}

console.log('Check if this User has Admin Role:', checkAdminRole()); // false

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }

  if (currentUser.role === role2) {
    return true;
  }
  return false;
}

console.log('Check if this User has Admin or Seller Role:', checkRole(ROLES.ADMIN, ROLES.SELLER)); // false

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

console.log('Check if this User has Admin or Seller Role:', checkRoleV2([ROLES.ADMIN, ROLES.SELLER])); // false

export const checkRoleV3 = (... roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

console.log('Check if this User has Admin, Customer or Seller Role:', checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER)); // true
