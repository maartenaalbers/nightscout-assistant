module.exports = {
    extension: ['ts','js'],
    package: './package.json',
    ui: 'bdd',
    require: "ts-node/register",
    'watch-files': ['**/*.js', '**/*.ts']
}