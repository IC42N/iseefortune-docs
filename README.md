# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## Security release — 2026-10-24
Docusaurus packages aligned at 3.10.2 with targeted worker/serializer/selector/UUID/query-parser overrides for the audited transitive findings. Installation, type checking and the production build passed; npm audit reports zero vulnerabilities. The existing v4 build configuration requires @docusaurus/faster 3.10.2, now declared explicitly. Node 24.22.1 is pinned through .node-version. Published commit 64fd7b5e381945305fbd1c6a764f9c7ebdd776f0 through the existing Cloudflare Pages Git integration; deployment 5dcd4ef5-860a-4a34-94db-e5f9e2cea973 succeeded and its HTTPS preview returned 200 with the expected documentation title. The custom domain continues to challenge automated requests (pre-existing); browser acceptance through that challenge remains unverified. These overrides require a successful build; npm downgrade suggestions were not applied.
