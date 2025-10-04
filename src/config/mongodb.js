
// NQ7eFd3MY91Xwtxw
// havanvu18_db_user
//mongodb+srv://havanvu18_db_user:NQ7eFd3MY91Xwtxw@cluster0-vanvudev.stsm4fg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-VanvuDev

import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment.js'
let trelloDatabaseInstance = null



const clientMongodb = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  // Gọi kết nối tới MongoDb Atlas với uri đã khai báo trong thân của clientMongodb
  await clientMongodb.connect()

  // Kết nối thành công thì lấy ra database theo tên và gán vào biến trelloDatabaseInstance
  trelloDatabaseInstance = clientMongodb.db(env.DATABASE_NAME)
}

export const CLOSE_DB = async () => {
  
  await clientMongodb.close()
}

export const GET_DB = () => {
  if(!trelloDatabaseInstance) throw new Error('Must connect to Database First')
  return trelloDatabaseInstance
}

