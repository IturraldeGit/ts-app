export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export type User = {
  username: string;
  role: ROLES;
}

const danielUser: User = {
  username: 'daniel',
  role: ROLES.ADMIN
}
