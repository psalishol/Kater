export enum OrderStatus {
  COMPLETED = 'COMPLETED',
  SHIPPED = 'SHIPPED',
  CONFIRMED = 'CONFIRMED',
  PENDING = 'PENDING',
}

export enum AccountType {
  CUSTOMER = 'CUSTOMER',
  PRODUCT_STORE = 'PRODUCT_STORE',
  SERVICE_STORE = 'SERVICE_STORE',
}

export interface User {
  readonly name: string;
  readonly email: string;
  readonly storeFollowingIDs: string[];
  readonly createdAt: string;
}

export interface Account {
  readonly store_name?: string | null;
  readonly type: AccountType | keyof typeof AccountType;
  readonly store_img?: string | null;
  readonly store_cover_img?: string | null;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly userID: string;
  readonly state?: string;
  readonly createdAt?: string | null;
}
