-- run this command by running the following:
-- sqlcmd -S 127.0.0.1 -U sa -P P@ssword123 -d DemoDatabase -i ./destroySchema.sql

DROP TABLE DemoSchema.DemoTable;
GO

DROP SCHEMA DemoSchema;
GO
