import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().message({
      'any.required': 'Title is required ',
    }), //customer message mặc định của Joi
    depcription: Joi.string().required().min(5).max(256).trim().strict(),
  })

  try {
    console.log('req.body :', req.body)

    //set abortEarly = false để trả về nhiều lỗi validation thì trả về tất cả lỗi
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    // validate dữ liệu xong xuôi hợp lệ thì cho request đi tiếp sang controller
    next()
    // res
    //   .status(StatusCodes.CREATED)
    //   .json({ message: 'POST: API create new board from validation ' })  // tạm commet vào
  } catch (error) {
    // const errorMessage = new Error(error).message
    // const customError = new ApiError(
    //   StatusCodes.UNPROCESSABLE_ENTITY,
    //   errorMessage
    // )
    // console.log(new Error(error))
    next(
      new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message)
    )
  }
}

export const boardValidation = {
  createNew,
}
