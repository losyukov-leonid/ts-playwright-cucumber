module.exports = {
  default: {
    paths: [
      'src/features/**.feature'
    ],
    require: ['cucumber.conf.js', 'src/step-definitions/**/**/*.ts'],
    requireModule: ['ts-node/register'],
    order: 'defined',
    format: ['./reporter.js']
  }
};
