# Licit
Legal Aid

[![CircleCI](https://circleci.com/gh/CoWare/Licit.svg?style=svg)](https://circleci.com/gh/CoWare/Licit)
[![Coverage Status](https://coveralls.io/repos/github/CoWare/Licit/badge.svg)](https://coveralls.io/github/CoWare/Licit)

Licit is a well architectured and easy to use application to help you create, manage, and share legal documents.

## Installation

1. Clone [repository](https://github.com/CoWare/Licit.git) or fork it.
2. Install [node](https://nodejs.org/en/) if you don't have it installed on your system.
3. Install gulp globally

   ```bash
   npm install gulp -g
   ```
4. Install project dependenies

    ```bash
    npm install
    ```
5. Add config variables. Put `.env` file in your project root directory and add the snippet bellow:

    ```
    DATABASE_URL=**************
    SECRET_KEY=****************
    FACEBOOK_ID=***************
    GOOGLE_IID=****************
    ---------
    ---------
    ---------
    ```

## Test

PS: This operation needs to be performed at the root of your project directory.

```bash
gulp Test
```

## Usage

```bash
gulp
```

## Contributing
Refer to [Contibuting Docuemnent](./docs/CONTRIBUTING.MD) to contribute to this project.

## Project Management Tools
Waffle is the project management tool used for this project. Refer to [Waffle Document](./docs/WAFFLE.MD) for details.

## LICENCE
MIT


