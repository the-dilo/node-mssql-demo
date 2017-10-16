// node_modules
const express = require('express')
const mssql = require('mssql')

// local
const config = require('./config')
const utils = require('./utils')

// vars
const app = express()

app.use(express.static('public'))

app.listen(3000, () => {
  console.log('Express listening on port 3000')
})

const sqlConfig = {
  user: 'sa',
  password: 'P@ssword123',
  server: '127.0.0.1',
  database: 'DemoDB',
  schema: 'DemoSchema',
  table: 'DemoTable'
}
const pool = new mssql.ConnectionPool(sqlConfig)

// connect to MS SQL database
const connectToDB = async () => {
  try {
    await pool.connect()
  } catch (err) {
    console.log(`error connecting to MSSQL database`, err)
  }
}
connectToDB()

const insert = setInterval(() => {
  const newRecord = {
    name: utils.generateRandomString(16),
    at: utils.generateTimestamp()
  }
  console.log(newRecord)
  insertRecordIntoDB(newRecord)
}, 1000)

const insertRecordIntoDB = async (record) => {
  try {
    // const query = `INSERT INTO DemoSchema.DemoTable ("at", "name") values (${record.at}, ${record.name})`
    const request = new mssql.Request(pool)

    request.input('at', record.at)
    request.input('name', record.name)
    const query = `INSERT INTO DemoSchema.DemoTable ("at", "name") VALUES (@at, @name)`
    const result = await request.query(query)
    console.log(result)
  } catch (err) {
    console.log(`error connecting to MSSQL database`, err)
  }
}
