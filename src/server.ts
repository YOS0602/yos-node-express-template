import { app } from './app'

const port = process.env.PORT || '3000'

app.listen(port, () => {
  console.log(`Node.js app listening on port ${port}. Or Access http://localhost:${port}`)
})
