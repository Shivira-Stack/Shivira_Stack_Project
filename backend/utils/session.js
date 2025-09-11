import session from "express-session";
import MySQLStoreFactory from "express-mysql-session";
import pool from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

// MySQL store factory
const MySQLStore = MySQLStoreFactory(session);

// Use pool for session storage with auto-create enabled
const sessionStore = new MySQLStore(
  {
    expiration: 1000 * 60 * 15,
    clearExpired: true,
    checkExpirationInterval: 1000 * 60 * 5,
    createDatabaseTable: true,
    schema: {
      tableName: "sessions",
      columnNames: {
        session_id: "session_id",
        expires: "expires",
        data: "data",
      },
    },
  },
  pool
);

export const sessionMiddleware = session({
  key: "login_session",
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 15,
    httpOnly: true,
    secure: false,
  },
});
