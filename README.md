communitypackages:unstyled
=====================================

Meteor sign up and sign in templates (and much more!) unstyled.

This package depends on [communitypackages:core](https://github.com/Meteor-Community-Packages/core)

## Bring Your Own CSS

Adding this package with `meteor add communitypackages:unstyled` does not add any css/less/sass rules but for the colors for social login buttons. This is to let you write your own ones!

## Writing Custom CSS Rules

Please have a look [here](https://github.com/Meteor-Community-Packages/core/blob/master/Guide.md#css-rules) to discover more about templates structure and find out how to write your own css rules.

## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.

Thanks to all those who have contributed code changes to [this package](https://github.com/Meteor-Community-Packages/unstyled/graphs/contributors) as well as to the [core package](https://github.com/Meteor-Community-Packages/core/graphs/contributors) and all who have helped by submitting bug reports and feature ideas.

## Changelog

### 2.0.0

- Renamed package from `useraccounts:unstyled` to `communitypackages:unstyled`
- Added compatibility with Meteor 2.16 and 3.x
- Updated dependency from `useraccounts:core` to `communitypackages:core@2.0.1`
- Updated weak dependency from `useraccounts:flow-routing` to `communitypackages:flow-routing@2.0.0`
- Modernized package API (`Package.onUse`, `api.addFiles`)
- Replaced `underscore` dependency with native JavaScript
- Replaced deprecated `Template.rendered` with `Template.onRendered`
- Added tests for template, helper, and event registration
