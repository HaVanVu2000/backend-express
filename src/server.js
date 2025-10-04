/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import { mapOrder } from '~/utils/sorts.js'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import exitHook from 'async-exit-hook'
import { env } from '~/config/environment.js'
import { APIs_V1 } from '~/routes/v1/index.js'
import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware.js'
const app = express()

const START_SERVER = () => {
  app.use(express.json())
  app.use('/v1', APIs_V1)
  // xử lý lỗi tập trung
  console.log('errorHandlingMiddleware:', errorHandlingMiddleware)
  app.use(errorHandlingMiddleware)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
  })

  exitHook(() => {
    // chạy trên win lỗi không nhảy vào đây được
    console.log('4. Disconneting from MongoDB Cloud Atlas')
    CLOSE_DB()
  })
}
;(async () => {
  try {
    console.log('1 Connected to mongoDB Cloud Atlas')
    await CONNECT_DB()
    console.log('2 Connected to mongoDB Cloud Atlas')
    START_SERVER()
  } catch (error) {
    ;(console.error(error), process.exit(0))
  }
})()

// CONNECT_DB().then(() => console.log(' 2 Connected to mongoDB Cloud Atlas')).then(
//   () => START_SERVER()
// ).catch(
//   error => {
//  console.error(error),
//  process.exit(0)
//   }
// )
