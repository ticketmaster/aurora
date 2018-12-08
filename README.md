<div align="center">
<h1>@ticketmaster/aurora</h1>
<strong>Shared UI Library for Ticketmaster</strong>
</div>

<hr />

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![Greenkeeper badge][greenkeeper-badge]](https://greenkeeper.io/)
[![version][version-badge]][package]

[![MIT License][license-badge]][license]
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]

[![size][size-badge]][unpkg-dist]
[![gzip size][gzip-badge]][unpkg-dist]
[![module formats: cjs][module-formats-badge]][unpkg-dist]

## How to get started:

Aurora relies on the [react](https://www.npmjs.com/package/react),
[prop-types](https://www.npmjs.com/package/prop-types),
and [styled-components](https://www.npmjs.com/package/styled-components)
peer-dependency packages are already to be installed and set up in your project.

Install Aurora from the npm registry by running the following command in your terminal:

```bash
npm install @ticketmaster/aurora
```

Then import each component you want to use in your app:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@ticketmaster/aurora";

ReactDOM.render(
  <Button variant="standard">Hello, world!</Button>,
  document.getElementById("root")
);
```

[![Edit 430zk16k6w](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/430zk16k6w?autoresize=1&hidenavigation=1)

## Running the catalog locally:

In order to run the [catalog](https://code.ticketmaster.com/aurora/) locally, you are required to complete the following steps:

1.  Execute `yarn install` at this directory's root.
2.  Execute `yarn catalog-start` at this directory's root.
3.  Navigate to `http://localhost:4000/` or your host alias's port 4000.

## How to use:

A documentation of each component and living styleguide will be available on the brand site for Ticketmaster.com.

## Other docs:

- [Code of Conduct][coc]
- [Contributing][contributing]
- [Maintaining][maintaining]

## LICENSE:

MIT

[build-badge]: https://img.shields.io/travis/Ticketmaster/aurora.svg
[build]: https://travis-ci.org/ticketmaster/aurora.svg?branch=master
[coverage-badge]: https://img.shields.io/codecov/c/github/ticketmaster/aurora.svg
[coverage]: https://codecov.io/github/ticketmaster/aurora
[greenkeeper-badge]: https://badges.greenkeeper.io/ticketmaster/aurora.svg
[version-badge]: https://img.shields.io/npm/v/@ticketmaster/aurora.svg
[package]: https://www.npmjs.com/package/@ticketmaster/aurora
[license-badge]: https://img.shields.io/npm/l/@ticketmaster/aurora.svg
[license]: https://github.com/ticketmaster/aurora/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg
[coc]: https://github.com/ticketmaster/aurora/blob/master/other/CODE_OF_CONDUCT.md
[contributing]: https://github.com/ticketmaster/aurora/blob/master/CONTRIBUTING.md
[maintaining]: https://github.com/ticketmaster/aurora/blob/master/other/MAINTAINING.md
[gzip-badge]: http://img.badgesize.io/https://unpkg.com/@ticketmaster/aurora/dist/index.umd.min.js?compression=gzip&label=gzip%20size
[size-badge]: http://img.badgesize.io/https://unpkg.com/@ticketmaster/aurora/dist/index.umd.min.js?label=size
[unpkg-dist]: https://unpkg.com/@ticketmaster/aurora/dist/
[module-formats-badge]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20es-green.svg
