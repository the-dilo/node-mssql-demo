-- create DemoDatabase first by running this command:
-- sqlcmd -S 127.0.0.1 -U sa -P P@ssword123 -Q "CREATE DATABASE DemoDatabase;"
-- then run this command by running the following:
-- sqlcmd -S 127.0.0.1 -U sa -P P@ssword123 -d DemoDatabase -i ./createSchema.sql

CREATE SCHEMA DemoSchema;
GO

SET QUOTED_IDENTIFIER ON;
GO

CREATE TABLE DemoSchema.DemoTable (
  "id" INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  "at" VARCHAR(63),
  "name" VARCHAR(63)
);
GO

SET QUOTED_IDENTIFIER OFF;
GO

SELECT * FROM DemoSchema.DemoTable;
GO
