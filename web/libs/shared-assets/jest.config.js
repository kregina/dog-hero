module.exports = {
  name: 'shared-assets',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/shared-assets',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
