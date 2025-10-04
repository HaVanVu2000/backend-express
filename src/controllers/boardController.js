import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNew = async (req, res, next) => {
  try {
    // console.log('req.body :', req.body)
    // console.log('req.query:', req.query)
    // console.log('req.params:', req.params)
    // // res
    //   .status(StatusCodes.CREATED)
    //   .json({ message: 'POST: API create new board from controller ' })
    // throw new ApiError(StatusCodes.BAD_GATEWAY, 'Xảy ra lỗi ở board controller')
    // Điều hướng dữ liệu sang services
    // Có kết quả thì trả về phía client
    res
      .status(StatusCodes.CREATED)
      .json({ message: 'Post từ controller :Api create new board' })
  } catch (error) {
    next(error) // chạy vào xử lý lỗi tập trung error handling
  }
}

export const boardController = {
  createNew,
}
