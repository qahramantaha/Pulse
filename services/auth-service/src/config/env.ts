import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || "4001",
  nodeEnv: process.env.NODE_ENV || "development",
  jwtSecret: process.env.JWT_SECRET || "your_jwt_secret_here",
  databaseUrl: process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/pulse"
};