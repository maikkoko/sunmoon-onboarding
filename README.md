# Onboarding - Countdown Timer

# onboarding

## 1. Setup Development Environment and Tools

- ReactJS
- Node.js (Express or Koa)
- Database of your choice
- vscode or any IDE you like
- Github

## 2. Front-End

### Guidelines

1. Front-end should be built using ReactJS.

## 2. Server

### Guidelines

1. Codebase should be written in a Github repository.
2. Source files should be in a separate directory named `src/` so that they can be isolated for building/compiling.
3. Server should be built using Express or Koa framework.
4. Feel free to use appropriate and useful npm modules for your project.

### API Specifications

Here's the list of endpoints your simple REST API Server should support:

#### 1. Create Log

```
HTTP Method: POST
URL: /api/logs
```

##### Request Body

- `timestamp`\<date> - user's email
- `log_type`\<string|enum> - "start" or "stop"

```json
{
  "timestamp": 2019-10-17 07:45:08,
  "log_type": "start"
}
```

##### Sample Response

```json
{
  "success": true,
  "message": "created"
}
```

#### 2. Retrieve All Logs

```
HTTP Method: GET
URL: /api/logs
```

##### Sample Response

```json
[
  {
    "id": "e18faf18-8db0-4926-8fde-5ade9a22f254",
    "timestamp": 2019-10-17 07:45:08,
    "log_type": "start"
  },
  {
    "id": "e18faf18-8db0-4926-8fde-5ade9a22f523",
    "timestamp": 2019-10-17 07:45:20,
    "log_type": "stop"
  }
]
```

#### 3. Delete a log

```
HTTP Method: DELETE
URL: /api/logs/:id
```

##### Arguments

- `:id` - log's id

##### Sample Response

```json
{
  "success": true,
  "message": deleted
}
```
