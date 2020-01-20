module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    },
    electronBuilder: {
      builderOptions: {
        productName: 'MHWEE',
        copyright: 'Copyright © 2020 Alcedo',
        win: {
          target: 'portable'
        },
        extraResources:  {
          "from": "./node_modules/electron-asar-hot-updater/updater.exe",
          "to": "../updater.exe"
        }
        // asarUnpack:['Sourceweapon']
      }
    }
  }
}
