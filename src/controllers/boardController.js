import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'
import { boardService } from '~/services/boardService'

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
    const createdBoard = await boardService.createNew(req.body)
    res.status(StatusCodes.CREATED).json(createdBoard)
  } catch (error) {
    next(error) // chạy vào xử lý lỗi tập trung error handling
  }
}

export const boardController = {
  createNew,
}
