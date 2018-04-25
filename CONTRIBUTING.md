# Contributing

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this _free_ series
[How to Contribute to an Open Source Project on GitHub][egghead]

## Project setup

1.  Fork and clone the repo
2.  `$ npm install` to install dependencies
3.  Create a branch for your PR

> Tip: Keep your `master` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```
> git remote add upstream https://github.com/ticketmaster/prism.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will add the original repository as a "remote" called "upstream,"
> Then fetch the git information from that remote, then set your local `master`
> branch to use the upstream master branch whenever you run `git pull`.
> Then you can make all of your pull request branches based on this `master`
> branch. Whenever you want to update your version of `master`, do a regular
> `git pull`.

## Committing and Pushing changes

This project uses [`semantic-release`][semantic-release] to do automatic
releases and generate a changelog based on the commit history. So we follow
[a convention][convention] for commit messages. You don't have to follow this
convention if you don't like to. Just know that when we merge your commit, we'll
probably use "Squash and Merge" so we can change the commit message :)

### opt into git hooks

There are git hooks set up with this project that are automatically installed
when you install dependencies.

## Help needed

Please checkout the [the open issues][issues]

Also, please watch the repo and respond to questions/bug reports/feature requests! Thanks!

[egghead]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[semantic-release]: https://npmjs.com/package/semantic-release
[convention]: https://github.com/conventional-changelog/conventional-changelog-angular/blob/ed32559941719a130bb0327f886d6a32a8cbc2ba/convention.md
[issues]: https://github.com/ticketmaster/prism/issues
