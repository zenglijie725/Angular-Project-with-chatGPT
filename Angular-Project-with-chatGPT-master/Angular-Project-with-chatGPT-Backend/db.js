const mysql = require('mysql');

// create a connection to the MySQL server
const connection = mysql.createConnection({
  host: 'anpwchatgptdb.cgcmhit3g6qm.us-west-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Mysql2345',
  database: '`AngularNodeSql`'
});

// connect to the MySQL server
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL server');
});

// perform a query
connection.query('SELECT * FROM your_table_name', (err, rows) => {
  if (err) throw err;
  console.log('Data received from MySQL:\n');
  console.log(rows);
});

// close the connection
connection.end((err) => {
  if (err) throw err;
  console.log('Connection closed');
});