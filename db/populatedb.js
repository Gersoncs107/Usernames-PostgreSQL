const {Client} = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
    id INTEGER PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
    console.log("Seeding...")
    const client = new Client({
     connectionString: 'postgresql://<role_name>:<role_password>@localhost:5432/top_users'
    });
    
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Seeding done.")
}
main()