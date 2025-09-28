import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface UserPayload {
      id: string;
      role: string;
    }

    interface Request {
      user?: UserPayload;
    }
  }
}
