const {Client} = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
    console.log("Seeding...");
    const client = new Client({
        connectionString: 'postgresql://postgres:32710019numB$@localhost:5432/top_users' // Replace with your credentials
    });
    
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Seeding done.");
}
main();