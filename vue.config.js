const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  devServer: {
    client: {
      webSocketURL: 'ws://artamonov.local:3000/ws',
    },
    host: '0.0.0.0',
    allowedHosts: 'all',
  },
  transpileDependencies: true
})

