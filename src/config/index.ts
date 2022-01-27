import 'dotenv/config';

export const PORT = (process.env.PORT || 3000) as number;
export const HOSTNAME = process.env.HOSTNAME || '0.0.0.0';

export const { DATABASE_URL } = process.env;
export const { DATABASE_NAME } = process.env;
