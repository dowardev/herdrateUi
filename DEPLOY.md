# Deploy

Documentation for deploying the project docs and publishing the library.

## Table of contents

- [Deploy methods](#deploy-methods)
- [Automatic deploy with GitLab CI/CD](#automatic-deploy-with-gitlab-cicd)
- [Manual deploy (without GitLab)](#manual-deploy-without-gitlab)
- [Local verification](#local-verification)
- [Publish the library to npm (manual)](#publish-the-library-to-npm-manual)
- [Rollback](#rollback)
- [Troubleshooting](#troubleshooting)

---

## Deploy methods

There are two ways to deploy the project docs:

| Method | When to use | Requirements |
|--------|-------------|--------------|
| **GitLab CI/CD** | Official releases with tag | GitLab Maintainer, runner, SSH configured in CI variables |
| **Manual** | Debug, hotfix, local dev | Node + pnpm + direct SSH access to server |

Choose the one that best fits your case.

---

## Automatic deploy with GitLab CI/CD

The pipeline runs automatically when a tag matching `v*.*.*` is created.

### Requirements (CI/CD)

- **Access to the GitLab repository** with at least `Maintainer` role.
- **GitLab CI/CD enabled** (a runner must be active for the project/group).
- **SSH access to the target server** where docs will be deployed.
- **Private SSH key** to authenticate against the server.

### Configure CI/CD variables

The pipeline uses GitLab environment variables instead of hardcoded
values. Configure them at:

#### GitLab path

```
Settings → CI/CD → Variables
```

Add each variable with "Protect variable" disabled and "Mask variable"
enabled for secrets:

| Variable | Description | Example |
|----------|-------------|---------|
| `SSH_PRIVATE_KEY` | Private SSH key | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `SSH_HOST` | Server IP or domain | `deploy.ejemplo.com` |
| `SSH_PORT` | SSH port | `22` |
| `SSH_USER` | SSH user | `deploy_user` |
| `DEPLOY_PATH_DOCS` | Server path for docs | `/var/www/herdrate-docs` |

### Trigger a deploy

The pipeline runs only when a tag matching `v*.*.*` is created:

```bash
git checkout main
git pull origin main
git tag v0.2.0
git push origin v0.2.0
```

View the pipeline at: **GitLab → CI/CD → Pipelines**

### Pipeline stages explained

| Stage | Job | Command | Description |
|-------|-----|---------|-------------|
| `lint` | `lint` | `pnpm check` | Biome + pipe check in markdown |
| `test` | `test` | `pnpm test` | Unit tests with Vitest |
| `build` | `build` | `pnpm build` | Builds library + docs |
| `deploy` | `deploy_docs` | `tar + scp + ssh` | Packages, uploads and extracts docs on server |

```text
[Create tag v*.*.*] → lint → test → build → deploy_docs
```

If **lint** or **test** fail, the pipeline stops and nothing is deployed.

---

## Manual deploy (without GitLab)

For deploying from your local machine without GitLab CI/CD.

### Requirements (manual)

- **Node 24** (see `mise.toml`)
- **pnpm 11.3.0** (`corepack enable && corepack prepare pnpm@11.3.0 --activate`)
- **SSH access** to the target server (public key added to `authorized_keys`)
- **Know** the server host, port, user, and path for the docs

### Step by step

```bash
# 1. Install dependencies
pnpm install --frozen-lockfile

# 2. Build the library first (docs depend on it)
pnpm --filter @dowardev/herdrate-vue build

# 3. Build the docs
pnpm --filter herdrate-docs docs:build

# 4. Package docs
tar czvf dist.tar.gz -C docs/.vitepress/dist .

# 5. Upload to server (replace <…> with your values)
scp -P <SSH_PORT> dist.tar.gz <SSH_USER>@<SSH_HOST>:<DEPLOY_PATH_DOCS>

# 6. Extract on server
ssh -p <SSH_PORT> <SSH_USER>@<SSH_HOST> \
  "cd <DEPLOY_PATH_DOCS> && tar xzvf dist.tar.gz && rm dist.tar.gz"
```

### Local preview (optional)

```bash
pnpm docs:dev
# Opens at http://localhost:5173
```

---

## Local verification

Before deploying (by any method), verify everything works:

```bash
# Tests
pnpm test

# Lint + format
pnpm lint
pnpm check

# Full build (library + docs)
pnpm build

# Docs preview (optional)
pnpm docs:dev
```

---

## Publish the library to npm (manual)

The `@dowardev/herdrate-vue` library is **not automatically published** by the
pipeline. It must be published manually:

```bash
# 1. Build the library (if not already built)
pnpm --filter @dowardev/herdrate-vue build

# 2. Publish to npm
cd packages/vue
npm publish
```

### Requirements (npm)

- An account at [npmjs.com](https://npmjs.com)
- Logged in: `npm login`
- Publish permissions for the `@dowardev/herdrate-vue` package

---

## Rollback

### Revert deployed docs

```bash
# Option 1: Push a tag with the previous stable version
git tag v0.1.0
git push origin v0.1.0

# Option 2: Restore manually on the server
ssh -p <SSH_PORT> <SSH_USER>@<SSH_HOST>
cd <DEPLOY_PATH_DOCS>
# Replace with a backup if available
```

### Delete a tag (does not revert the deploy)

```bash
git tag -d v0.2.0
git push origin --delete v0.2.0
```

> This prevents the pipeline from triggering again, but does not undo
> the last deploy on the server.

---

## Troubleshooting

| Problem | Likely cause | Solution |
|---------|--------------|----------|
| Pipeline does not run on push | Tag does not match `v*.*.*` | Verify: `git tag -l` and that it starts with `v` |
| `SSH_PRIVATE_KEY` does not work | Key not loaded correctly | Verify the variable has the full key value |
| `ssh: handshake failed` | Host key mismatch or wrong port | Check `SSH_HOST` and `SSH_PORT` |
| `Permission denied (publickey)` | Key not authorized on server | Add the public key to `authorized_keys` |
| `pnpm install --frozen-lockfile` fails | Lockfile not up to date | Run `pnpm install` locally and commit `pnpm-lock.yaml` |
| Deployed docs look empty/broken | `DEPLOY_PATH_DOCS` does not exist on server | Create the directory or verify the path |
