# LICIT API Documentation
This document contains a description of the HTTP enpoints of the Licit RESTful API. It describes the input data format and what the response of the server would look like.

**Base API Link: api/v1/*endpoint***

## Endpoint table

|Endpoints                    |Verb      | Authentication | Authorization | Description |
|---|:---|:---:|:---:|:---|
| /api/v1/auth/signin                | `POST`   | no    | no    | Get authenticated from this route        |
| /api/v1/auth/signup                | `POST`   | no    | no    | Create a new user via this route        |
| /api/v1/auth/signout               | `POST`   | yes   | no    | Log a user out of the service        |
| /api/v1/users                      | `GET`    | yes   | yes   | Get a list of all users on the platform        |
| /api/v1/users/:uid                 | `GET`    | yes   | no    | Get a particular user        |
| /api/v1/users/:uid                 | `PUT`    | yes   | no    | Updates a particular users' information        |
| /api/v1/users/:uid                 | `DELETE` | yes   | no    | Remove a user        |
| /api/v1/users/:uid/documents       | `GET`    | yes   | yes   | Get the specified users' documents        |
| /api/v1/users/:uid/documents/:did  | `GET`    | yes   | yes   | Get the specified document of the specified user        |
| /api/v1/users/:uid/documents/      | `POST`   | yes   | no    | Create a new user document        |
| /api/v1/users/:uid/documents/:did  | `PUT`    | yes   | no    | Update a specified document of a specified user        |
| /api/v1/users/:uid/documents/:did  | `DELETE` | yes   | no    | Delete a specified document of a specified user        |
| /api/v1/templates              | `GET`    | yes    | no     | Get all templates        |
| /api/v1/templates/:tid         | `GET`    | yes    | no     | Get a specific template        |
| /api/v1/templates              | `POST`   | yes    | yes    | Create a new template        |
| /api/v1/templates/:tid         | `PUT`    | yes    | yes    | Update a specified template        |
| /api/v1/templates/:tid         | `DELETE` | yes    | yes    | Remove a specified template        |
| /api/v1/categories             | `GET`    | yes    | yes    | Get all categories        |
| /api/v1/categories/:cid        | `GET`    | yes    | no     | Get a specific category        |
| /api/v1/categories             | `POST`   | yes    | yes    | Create a new category        |
| /api/v1/categories/:cid        | `PUT`    | yes    | yes    | Update a specified category        |
| /api/v1/categories/:cid        | `DELETE` | yes    | yes    | Remove a  specified category        |

## Request Format
### Route Inputs
- */api/v1/auth/signin*

Input
```json
{
  "email": "sample@example.com",
  "password": "password"
}
```

Output (if 200)
```json
{
  "user": "/*user details object*/",
  "token": "token"
}
```

- */api/v1/auth/signup*

Input
```json
{
  "name": "Example User",
  "email": "example.user@example.com",
  "password": "password"
}
```

Output (if 200)
```json
{
  "user": "/*user details object*/",
  "token": "token"
}
```

- */api/v1/auth/signup*

Output (always 200)
```json
{
  "message": "successfully logged out."
}
```

### Model Structure
#### User
```json
{
  "name": "unique required",
  "email": "unique required",
  "password": "required",
  "_id": "auto-generated",
  "documents": [ 1, 2, 3, 4],
  "userType": "user",
  "isActive": true
}
```
#### Documents
```json
{
  "documentName": "required",
  "title": "required",
  "_id": "unique required auto-generated",
  "owner": "uid",
  "shared": [
    {
      "uid": "uid",
      "permissions": ["read"]
    }
  ],
  "timeCreated": "unix time",
  "categories": [1, 2, 3, 4]
}
```
#### Templates
```json
{
  "templateName": "required",
  "title": "required",
  "_id": "unique required auto-generated",
  "timeCreated": "unix time",
  "categories": [1, 2, 3, 4]
}
```
#### Categories
```json
{
  "categoryName": "required",
  "_id": "unique auto-generated",
  "did": [ 1, 2, 3, 4],
  "timeCreated": "unix time"
}
```

## Errors
All errors must be in the format
```json
{
  "error": "validation failed for field 'email'",
  "message": "validation error",
  "status": 404
}
```