# LICIT API Documentation
TODO: Add description here

**Base API Link: api/v1/endpoint**

## Endpoint table

|Endpoints                    |Verb      | Authentication | Authorization | Description |
|---|:---|:---:|:---:|:---|
| /api/v1/auth/signin                | `POST`   | no    | no    | TODO        |
| /api/v1/auth/signup                | `POST`   | no    | no    | TODO        |
| /api/v1/auth/signout               | `POST`   | yes   | no    | TODO        |
| /api/v1/users                      | `GET`    | yes   | yes   | TODO        |
| /api/v1/users/:uid                 | `GET`    | yes   | no    | TODO        |
| /api/v1/users/:uid                 | `PUT`    | yes   | no    | TODO        |
| /api/v1/users/:uid                 | `DELETE` | yes   | no    | TODO        |
| /api/v1/users/:uid/documents       | `GET`    | yes   | yes   | TODO        |
| /api/v1/users/:uid/documents/:did  | `GET`    | yes   | yes   | TODO        |
| /api/v1/users/:uid/documents/      | `POST`   | yes   | no    | TODO        |
| /api/v1/users/:uid/documents/:did  | `PUT`    | yes   | no    | TODO        |
| /api/v1/users/:uid/documents/:did  | `DELETE` | yes   | no    | TODO        |
| /api/v1/templates              | `GET`    | yes    | no     | TODO        |
| /api/v1/templates/:tid         | `GET`    | yes    | no     | TODO        |
| /api/v1/templates              | `POST`   | yes    | yes    | TODO        |
| /api/v1/templates/:tid         | `PUT`    | yes    | yes    | TODO        |
| /api/v1/templates/:tid         | `DELETE` | yes    | yes    | TODO        |
| /api/v1/categories             | `GET`    | yes    | yes    | TODO        |
| /api/v1/categories/:cid        | `GET`    | yes    | no     | TODO        |
| /api/v1/categories             | `POST`   | yes    | yes    | TODO        |
| /api/v1/categories/:cid        | `PUT`    | yes    | yes    | TODO        |
| /api/v1/categories/:cid        | `DELETE` | yes    | yes    | TODO        |

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

### Model Structure
#### User
```
{
    name: unique required,
    email: unique required,
    password: required,
    uid: auto-generated,
    documents: [did: 1, 2, 3, 4],
    userType: user admin,
    isActive: true false
}
```
#### Documents
```
{
    documentName: required,
    title: required,
    did: unique required auto-generated,
    owner: uid,
    shared: [
    	{
            uid,
            permissions
        }
    ],
    timeCreated: unix time,
    categories: [cid: 1, 2, 3, 4]
}
```
#### Categories
```
{
    categoryName: required,
    cid: unique auto-generated,
    did: [did: 1, 2, 3, 4],
    timeCreated: unix time
}
```

## Errors
All errors must be in the format
```json
{
  "error": "detailed error message", // e.g validation failed for field 'email'
  "message": "error synopsis", // e.g validation error
  "status": 404 //Or a more appropriate error code
}
```