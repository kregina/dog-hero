module.exports = {
  name: 'dog-hotel',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dog-hotel',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
