import dotenv from 'dotenv'


const envFound  = dotenv.config()

if (envFound.error) {
    throw new Error('no .env file found')
}

export default {
    port: parseInt(process.env.PORT, 10)
}