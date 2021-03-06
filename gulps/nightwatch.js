'use strict';

/**
 * Run UI tests.
 * Example of running tests:
 * gulp nightwatch --env [test_settings profile]
 */
module.exports = function(gulp, plugins) {
    return function() {
        gulp.task('nightwatch', () => {
            return gulp.src('./test/spec-ui/test.js', {read: false})
            .pipe(plugins.nightwatch({
                configFile : './test/nightwatch.json',
                cliArgs    : [
                    // '--test ' + './test/spec-ui/tests/apps/notes/show.js',
                    `--env ${(plugins.minimist.env || 'default')}`,
                ]
            }))
            .once('error', err => {
                console.log('Error', err.toString());
                process.exit(1);
            });
        });
    };
};
