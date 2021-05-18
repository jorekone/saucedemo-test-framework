exports.config={
    runner: 'local',
    specs: ['./tests/**/*.ts'],
    capabilities: [{
        browserName: 'chrome'
    }],
    framework: 'mocha',
    reporter: 'dot',
    services: ['chromedriver'],
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
    }
}