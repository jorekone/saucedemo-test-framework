const defaultTimeoutInterval = 2000;

exports.config={
    runner: 'local',
    specs: ['./src/tests/**/*spec.ts'],
    capabilities: [{
        browserName: 'chrome'
    }],
    framework: 'mocha',
    mochaOpts: {
        timeout: defaultTimeoutInterval
    },
    reporter: 'dot',
    services: ['chromedriver'],
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
    },
    suites: {
        basket: [
            './src/tests/basket.add.remove.items.spec.ts'
        ]
    }
}