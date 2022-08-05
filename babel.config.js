module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "extensions": ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        "root": [
          "./src"
        ],
        
      "alias": {
        "src": "./src",
        "~navigation": "./src/navigation",
        "~types": "./src/types",
        "~theme": "./src/theme",
        "~model": "./src/model",
        "~icons": "./src/icons",
        "~assets": "./src/assets",
        "~screens": "./src/screens",
        "~store": "./src/store",
        "~components": "./src/components",
        "~hooks": "./src/hooks",
        "~typography": "./src/typography",
        "~utils": "./src/utils",
        "~layouts": "./src/layouts",
        "~toast": "./src/toast",
       }
      } 
    ],
    'react-native-reanimated/plugin'
  ]
};
