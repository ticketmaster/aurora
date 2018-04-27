<div align="center">
<h1>@ticketmaster/prism</h1>
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


## How to get started

Prism relies on the [react](https://www.npmjs.com/package/react),
[prop-types](https://www.npmjs.com/package/prop-types),
and [styled-components](https://www.npmjs.com/package/styled-components)
peer-dependency packages to already be installed and set up in your project.

Install prism from the npm registry by running the following command in your terminal:

```bash
npm install @ticketmaster/prism
```

Then import each component you want to use in your app:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@ticketmaster/prism";

ReactDOM.render(
  <Button variant="standard">Hello, world!</Button>,
  document.getElementById("root")
);
```

## How to use

A documentation of each component and living styleguide is available at https://code.ticketmaster.com/prism/

## Other docs

* [Code of Conduct][coc]
* [Contributing][contributing]
* [Maintaining][maintaining]

## LICENSE

MIT

[build-badge]: https://img.shields.io/travis/Ticketmaster/prism.svg
[build]: https://travis-ci.org/Ticketmaster/prism
[coverage-badge]: https://img.shields.io/codecov/c/github/ticketmaster/prism.svg
[coverage]: https://codecov.io/github/ticketmaster/prism
[greenkeeper-badge]: https://badges.greenkeeper.io/ticketmaster/prism.svg
[version-badge]: https://img.shields.io/npm/v/@ticketmaster/prism.svg
[package]: https://www.npmjs.com/package/@ticketmaster/prism
[license-badge]: https://img.shields.io/npm/l/@ticketmaster/prism.svg
[license]: https://github.com/ticketmaster/prism/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg
[coc]: https://github.com/ticketmaster/prism/blob/master/other/CODE_OF_CONDUCT.md
[contributing]: https://github.com/ticketmaster/prism/blob/master/CONTRIBUTING.md
[maintaining]: https://github.com/ticketmaster/prism/blob/master/other/MAINTAINING.md
[gzip-badge]: http://img.badgesize.io/https://unpkg.com/@ticketmaster/prism/dist/index.umd.min.js?compression=gzip&label=gzip%20size
[size-badge]: http://img.badgesize.io/https://unpkg.com/@ticketmaster/prism/dist/index.umd.min.js?label=size
[unpkg-dist]: https://unpkg.com/@ticketmaster/prism/dist/
[module-formats-badge]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20es-green.svg
