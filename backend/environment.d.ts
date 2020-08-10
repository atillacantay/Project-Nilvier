declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_URL: string
      NODE_ENV: 'development' | 'production'
      PORT?: string
      PWD: string
      TWITCH_CLIENT_ID: string
    }
  }
}

export {}
