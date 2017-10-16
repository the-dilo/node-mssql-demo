# node-mssql-demo

> node-mssql-demo

## Getting started

1) Install [node](https://nodejs.org/en/), [git](https://git-scm.com/downloads), and [yarn](https://yarnpkg.com/lang/en/docs/install/)

2) Clone this repo

```bash
git clone https://github.com/thegreatsunra/node-mssql-demo.git
cd node-mssql-demo
```

3) Install dependencies

```bash
yarn
```

## Set up Microsoft SQL Server

1) Follow [the beginning of these instructions](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker) to install Docker on your computer and download a Microsoft SQL Server Docker container

2) Run this command to start your SQL Server Docker container

```bash
docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=P@ssword123' -p 1433:1433 -d microsoft/mssql-server-linux
```

3) Run this command to create the database you will use for the demo

```bash
sqlcmd -S 127.0.0.1 -U sa -P P@ssword123 -Q "CREATE DATABASE DemoDatabase;"
```

4) Download the [DBeaver](https://dbeaver.jkiss.org/) SQL server client and use it to confirm SQL Server is running and your database was created successfully

5) In DBeaver:
  1. Create New Connection
  1. MS SQL Server -> Microsoft Driver
  1. JDBC URL (leave blank, as the value will be auto-filled)
  1. Host: `127.0.0.1`
  1. Database/Schema: `DemoDatabase`
  1. User name: `sa`
  1. Password: `P@ssword123
  1. Test Connection (you should get a popup that indicates "Connected")
  1. Click "Next"
  1. Click "Next" (i.e. don't set anything for SSH tunnel or SOCKS Proxy)
  1. Click "Finish"

## Configure demo to connect to SQL Server

1) Run this command from the node-mssql-demo folder to create the schema that will be used for the demo

```bash
sqlcmd -S 127.0.0.1 -U sa -P P@ssword123 -d DemoDatabase -i ./createSchema.sql
```

2) Copy `config.js.example` to `config.js`

3) Update the user, password, server, and database values in `config.js` to reflect those you used when creating the database. Here's an example configuration:

```javascript
module.exports = {
  db: {
    user: 'sa',
    password: 'P@ssword123',
    server: '127.0.0.1',
    database: 'DemoDatabase'
  }
}
```

## Run the demo

1) Run this command to start the demo

```bash
npm start
```

## Clean up and/or start over

1) With the SQL server running, run this command from the node-mssql-demo folder to destroy the database

```bash
sqlcmd -S 127.0.0.1 -U sa -P P@ssword123 -d DemoDatabase -i ./destroySchema.sql
```

## License

The MIT License (MIT)

Copyright (c) 2017 Dane Petersen
