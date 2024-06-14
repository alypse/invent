# Invent Backend

## Local Development for backend
Build the project and start the server with the following commands:
```
npm run build:docker
npm run docker:run-windows
```

## Known issues
- **--loader option in start script** The start script uses --loader which was an experimental feature. 
Loader is no longer experimental, but the warning has not been removed. [Issue #1](https://github.com/nodejs/node/issues/30213)
- **Reload on file change** The server does not reload on file change. The server must be manually restarted.
This is not intended behavior and will be fixed in the future.
