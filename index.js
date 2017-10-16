// node_modules
const express = require('express')
const mssql = require('mssql')

// local
const config = require('./config')
const utils = require('./utils')

// vars
const app = express()
const dbPath = 'mssql://sa:P@ssword123@127.0.0.1/DemoDB'

app.use(express.static('public'))

app.listen(3000, () => {
  console.log('Express listening on port 3000')
})

// connect to MS SQL database
const connectToDB = async () => {
  try {
    const pool = await mssql.connect(dbPath)
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
    const result = await mssql.query`INSERT INTO DemoSchema.DemoTable ("at", "name") values (${record.at}, ${record.name})`
    console.log(result)
  } catch (err) {
    console.log(`error connecting to MSSQL database`, err)
  }
}
