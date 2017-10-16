// node_modules
const express = require('express')
const sql = require('mssql')

// local
const config = require('./config')
const utils = require('./utils')

// vars
const app = express()

app.use(express.static('public'))

app.listen(3000, () => {
  console.log('Express listening on port 3000')
})

const sqlServer = {
  'user': config.db.user,
  'password': config.db.password,
  'server': config.db.server,
  'database': config.db.database
}
const pool = new sql.ConnectionPool(sqlServer)

// connect to MS SQL database
const connectToDB = async () => {
  try {
    await pool.connect()
  } catch (err) {
    console.log(`error connecting to sql database`, err)
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
    const request = new sql.Request(pool)
    request.input('at', record.at)
    request.input('name', record.name)
    const query = `INSERT INTO DemoSchema.DemoTable ("at", "name") VALUES (@at, @name)`
    const result = await request.query(query)
    console.log(result)
  } catch (err) {
    console.log(`error inserting record into SQL Server database`, err)
  }
}
