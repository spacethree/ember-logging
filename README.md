# ember-logging

A simple logging service for ember applications.

## Compatibility

- Ember.js v4.8 or above
- Ember CLI v4.8 or above
- Node.js v18 or above

## Installation

```
ember install ember-logging
```

## Usage

1. inject the `logger` service
1. use `this.logger.{debug|warn|error}(...args)`

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).

## Publishing

To publish a new version of this package, follow these steps:

1. Update the version number with the `npm version` command. Be sure to follow semantic versioning rules.

2. Generate the changelog using lerna-changelog. This tool uses pull request labels to categorize changes. Run the following command:

```
GITHUB_AUTH=[GITHUB_AUTH CODE HERE] yarn changelog
```

This will output the changelog to the console. Copy this output and prepend it to the `CHANGELOG.md` file.

3. Commit the changes to `CHANGELOG.md` and `package.json` with a message like "Release v<version>".

4. Push the commit and tag to the repository. Use the following command:

```
git push && git push --tags
```

5. The release workflow will automatically run on GitHub Actions when the tag is pushed.
