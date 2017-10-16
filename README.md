# basic-express-server

> basic-express-server

## Getting started

1) install [node](https://nodejs.org/en/), [git](https://git-scm.com/downloads), and [yarn](https://yarnpkg.com/lang/en/docs/install/)

2) clone this repo

```bash
git clone https://github.com/thegreatsunra/basic-express-server.git
cd basic-express-server
```

3) install dependencies

```bash
yarn
```

4) (optional) replace the contents of the `/public` folder with your static site

5) run the app

```bash
npm start
```

## Microsoft SQL Stuff


* https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker
* `docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=P@ssword123' -p 1433:1433 -d microsoft/mssql-server-linux`
* sqlcmd -S 127.0.0.1 -U sa -P P@ssword123 -Q "CREATE DATABASE DemoDB;"
* https://dbeaver.jkiss.org/
  * Create New Connection
  * MS SQL Server -> Microsoft Driver
  * JDBC URL (leave blank; it will be auto-filled)
  * Host: `127.0.0.1`
  * Database/Schema: `DemoDB`
  * User name: `sa`
  * Password: `P@ssword123
  * Test Connection (should get a popup that indicates "Connected")
  * Click "Next"
  * Click "Next" (i.e. don't set anything for SSH tunnel or SOCKS Proxy)
  * Click "Finish"
* `sqlcmd -S 127.0.0.1 -U sa -P P@ssword123 -d DemoDB -i ./createSchema.sql`



## License

The MIT License (MIT)

Copyright (c) 2017 Dane Petersen
