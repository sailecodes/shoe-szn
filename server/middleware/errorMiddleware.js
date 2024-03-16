import { StatusCodes } from "http-status-codes";

const errorMiddleware = (err, req, res, next) => {
  res
    .status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: err.message || "Something went wrong, please try again" });
};

export default errorMiddleware;
