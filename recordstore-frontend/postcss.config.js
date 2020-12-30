module.exports = {
  plugins: [
    require('tailwindcss')('./app/recordstore-frontend/assets/tailwind.config.js'),
    {
      'autoprefixer': {browsers: 'last 5 version'}
    }
  ]
}
// module.exports = {
//   plugins: [
//     require('tailwindcss')('tailwind.js'),
//     require('autoprefixer')()
//   ]
// }
