import { CustomError } from './custom.error'

export class DatabaseError extends CustomError {
  name = 'DatabaseError'
  constructor({
    code,
    message,
    status,
    stack,
    error,
  }: {
    code: string
    message: string
    status: number
    stack?: string | undefined
    error?: Error | undefined
  }) {
    super({ code, message, status, stack, error })
  }
}
