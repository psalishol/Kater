// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "COMPLETED": "COMPLETED",
  "SHIPPED": "SHIPPED",
  "CONFIRMED": "CONFIRMED",
  "PENDING": "PENDING"
};

const AccountType = {
  "CUSTOMER": "CUSTOMER",
  "PRODUCT_STORE": "PRODUCT_STORE",
  "SERVICE_STORE": "SERVICE_STORE"
};

const { Order, Product, Message, ChatRoom, User, Account, Promo } = initSchema(schema);

export {
  Order,
  Product,
  Message,
  ChatRoom,
  User,
  Account,
  Promo,
  OrderStatus,
  AccountType
};