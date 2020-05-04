# CHANGELOG

The changelog is automatically updated using [semantic-release](https://github.com/semantic-release/semantic-release).
You can see it on the [releases page](../../releases).

# PACKAGE COMPATIBILITY

We will try to ensure backwards compatibility between the `aurora` library and all peer-depencies that are required.

In the event that we decide to upgrade a peer-dependency to a new version that is not backwards compatible, we will
update this compatibility table to designate which versions of `aurora` are compatible with a given peer-dependency range.

If a package is missing from this table, please reference the `package.json` for the required peer-dependency range.

## Compatibility Table

| Package name      | Peer-dependency range | Aurora version     |
| ----------------- | --------------------- | ------------------ |
| styled-components | >=v2                  | earliest - v3.43.3 |
| styled-components | >=v4                  | v3.44.0 - v3.128.1 |
| styled-components | >=v5                  | v3.129.1 - latest  |
