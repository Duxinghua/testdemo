module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    extractCSS: !isDev, // 提取css
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }
    // hotReload: true 热重载，在线更线

  }
}
