import pg from "pg";

// export const db = new pg.Pool({
//   host: process.env.PGHOST,
//   port: process.env.PGPORT,
//   database: process.env.DATABASE_URL,
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
// });

// export const db = new pg.Pool(
//   process.env.NODE_ENV === "development"
//     ? {
//         host: process.env.PGHOST,
//         port: process.env.PGPORT,
//         database: process.env.PGDATABASE,
//         user: process.env.PGUSER,
//         password: process.env.PGPASSWORD,
//       }
//     : { connectionString: process.env.DATABASE_URL }
// );

export const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });
