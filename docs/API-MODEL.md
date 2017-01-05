# LICIT API Documentation
TODO: Add description here

**Base API Link: api/v1/endpoint**

## Endpoint table

|Endpoints                    |Verb      | Authe | Autho | description |
|---|---|---|---|---|
| /api/auth/signin                | `POST`   | no    | no    | TODO        |
| /api/auth/signup                | `POST`   | no    | no    | TODO        |
| /api/auth/signout               | `POST`   | no    | no    | TODO        |
| /api/users/:uid                 | `GET`    | yes   | no    | TODO        |
| /api/users/:uid                 | `PUT`    | yes   | no    | TODO        |
| /api/users/:uid/documents       | `GET`    | yes   | yes   | TODO        |
| /api/users/:uid/documents/:did  | `GET`    | yes   | yes   | TODO        |
| /api/users/:uid/documents/      | `POST`   | yes   | no    | TODO        |
| /api/users/:uid/documents/:did  | `PUT`    | yes   | no    | TODO        |
| /api/users/:uid/documents/:did  | `DELETE` | yes   | no    | TODO        |
| /api/documents              | `GET`    | no    | no    | TODO        |
| /api/documents/:did         | `GET`    | no    | no    | TODO        |
| /api/documents              | `POST`   | no    | no    | TODO        |
| /api/documents/:did         | `PUT`    | no    | no    | TODO        |
| /api/categories             | `GET`    | no    | no    | TODO        |
| /api/categories/:cid        | `GET`    | no    | no    | TODO        |

## Objects
### User
```
{
    username: unique required,
    email: unique required,
    password: required,
    uid: auto-generated,
    documents: [did: 1, 2, 3, 4],
    userType: user admin
}
```
###Documents
```
{
    documentName: required,
    did: unique required auto-generated,
    owner: uid,
    shared: [
    	{
            uid,
            permissions
        }
    ],
    type: template user-edited,
    timeCreated: unix time,
    categories: [cid: 1, 2, 3, 4]
}
```
### Categories
```
{
    categoryName: required,
    cid: unique auto-generated,
    did: [did: 1, 2, 3, 4],
    rimeCreated: unix time
}
```