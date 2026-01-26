# `@cklibs/source`



Run `pnpm exec nx graph` to visually explore what was created. Now, let's get you up to speed!



## Generate a library

```sh
pnpm exec nx g @nx/js:lib packages/pkg1 --publishable --importPath=@my-org/pkg1
```

## Run tasks

To build the library use:

```sh
pnpm exec nx build pkg1
```

To run any task with Nx use:

```sh
pnpm exec nx <target> <project-name>
```

## Versioning and releasing

### Pre-release

Manually trigger `publish-pre` Github Action.

### Release

Process:
1. Dry-run: Run the following command to see the changes.
```sh
pnpm exec nx release --dry-run
```

2. Update versions: If everything looks OK, run
```sh
pnpm exec nx release
```

3. Publish packages: Go to GitHub and manually trigger `publish` release process.



## Keep TypeScript project references up to date

Nx automatically updates TypeScript [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) in `tsconfig.json` files to ensure they remain accurate based on your project dependencies (`import` or `require` statements). This sync is automatically done when running tasks such as `build` or `typecheck`, which require updated references to function correctly.

To manually trigger the process to sync the project graph dependencies information to the TypeScript project references, run the following command:

```sh
pnpm exec nx sync
```

You can enforce that the TypeScript project references are always in the correct state when running in CI by adding a step to your CI job configuration that runs the following command:

```sh
pnpm exec nx sync:check
```

[Learn more about nx sync](https://nx.dev/reference/nx-commands#sync)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


