module.exports = {
  '*.{js,jsx,tx,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `eslint --fix ${filenames.join(' --file')}`
  ]
}
