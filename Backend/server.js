const app = require('./app');
const config = require('./config/env');
const db = require('./db');

const PORT = config.PORT;

db.connect();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});