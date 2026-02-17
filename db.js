class Database {
    constructor(
        type = 'mysql' | 'sqlserver' | 'mongodb' | 'sqlite',
        port,
        username,
        password,
        host
    ) {
        this.connection = null;
        this.type = type;
        this.port = port;
        this.username = username;
        this.password = password;
        this.host = host;
        
    }

    up() {
        // connect to database
        this.connection = {
            address: `db://${this.host}:${this.port}/${this.type}/${this.username}:${this.password}`,
            update: {},
            delete: {},
            query: {},
            prepaer: {},
            close: {

            }
        };
        return this.connection;
    }

    down() {
        this.connection.close();
    }
}

class MySQL {
    constructor(
        config
    ) {
        this.host = config.host;
        this.port = config.port;
        this.username = config.username;
        this.password = config.password;
        this.database = config.database;
        this.connection = null;
    }

    async connect() {
        console.log(`Connecting to MySQL at ${this.host} ...`);
        this.connection = { connected: true };
    }

    async disconnect() {
        console.log('Disconnecting from MySQL ...');
        this.connection = null;
    }

    async query(sql) {
        if (!this.connection) throw new Error('Not connected');
        console.log(`MySQL query: ${sql}`);
        return Promise.resolve({ rows: [] });
    }
}

class FactoryDatabase {

    static register = new Map();

    static registerDatabase(type, databaseClass) {
        if (!FactoryDatabase.register.has(type)) {
            FactoryDatabase.register.set(type, databaseClass);
        } else {
            console.warn(`نوع "${type}" قبلاً ثبت شده است.`);
        }
    }

    static createDatabase(type, config) {
        switch(type) {
            case 'mysql':
                return new MySQL(config);
            default:
                throw new Error(`❌ نوع پایگاه‌داده "${type}" پشتیبانی نمی‌شود.`);
        }
    }

    static getDatabaseClass(type, config) {
        const DatabaseClass = FactoryDatabase.register.get(type);
        if (!DatabaseClass) {
            throw new Error(`❌ نوع پایگاه‌داده "${type}" پشتیبانی نمی‌شود. (آیا آن را ثبت کرده‌اید؟)`);
        }
        return new DatabaseClass(config);
    }
}

FactoryDatabase.registerDatabase('mysql', MySQL);

const mysqlDatabase = FactoryDatabase.createDatabase('mysql', {
    host: 'localhost',
    username: 'root',
    password: '123456',
    database: 'test_db',
    port: 5020
});

await mysqlDatabase.connect();
await mysqlDatabase.query('SELECT * FROM users');
await mysqlDatabase.disconnect();

