# Backend Code Documentation

This document contains the backend folder structure and the full contents of the backend code files in this project.

## Folder Structure

```text
backend
+-- src
|   +-- config
|   |   \-- db.js
|   +-- middleware
|   |   +-- adminMiddleware.js
|   |   \-- authMiddleware.js
|   +-- modules
|   |   +-- admin
|   |   |   \-- admin.routes.js
|   |   +-- assignments
|   |   |   \-- assignments.routes.js
|   |   +-- auth
|   |   |   \-- auth.routes.js
|   |   +-- certificates
|   |   |   \-- certificates.routes.js
|   |   +-- courses
|   |   |   \-- courses.routes.js
|   |   +-- notifications
|   |   |   \-- notifications.routes.js
|   |   +-- quizzes
|   |   |   \-- quizzes.routes.js
|   |   +-- students
|   |   |   \-- students.routes.js
|   |   \-- users
|   |       \-- users.routes.js
|   +-- scripts
|   |   \-- seed.js
|   +-- app.js
|   \-- server.js
+-- uploads
|   +-- assignments
|   +-- certificates
|   +-- notes
|   +-- profile
|   +-- submissions
|   \-- videos
+-- .env
+-- package.json
\-- package-lock.json
```

## File Contents

### backend\.env

`$lang
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root123
DB_NAME=lms_db

JWT_SECRET=supersecretkey
```

### backend\package.json

`$lang
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "seed": "node src/scripts/seed.js"
  },
  "dependencies": {
    "bcrypt": "^6.0.0",
    "cors": "^2.8.6",
    "dotenv": "^17.3.1",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "multer": "^2.1.0",
    "mysql2": "^3.18.2"
  }
}
```

### backend\package-lock.json

`$lang
{
  "name": "backend",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "dependencies": {
        "bcrypt": "^6.0.0",
        "cors": "^2.8.6",
        "dotenv": "^17.3.1",
        "express": "^5.2.1",
        "jsonwebtoken": "^9.0.3",
        "multer": "^2.1.0",
        "mysql2": "^3.18.2"
      }
    },
    "node_modules/@types/node": {
      "version": "25.3.3",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-25.3.3.tgz",
      "integrity": "sha512-DpzbrH7wIcBaJibpKo9nnSQL0MTRdnWttGyE5haGwK86xgMOkFLp7vEyfQPGLOJh5wNYiJ3V9PmUMDhV9u8kkQ==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "undici-types": "~7.18.0"
      }
    },
    "node_modules/accepts": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz",
      "integrity": "sha512-5cvg6CtKwfgdmVqY1WIiXKc3Q1bkRqGLi+2W/6ao+6Y7gu/RCwRuAhGEzh5B4KlszSuTLgZYuqFqo5bImjNKng==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "^3.0.0",
        "negotiator": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/append-field": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/append-field/-/append-field-1.0.0.tgz",
      "integrity": "sha512-klpgFSWLW1ZEs8svjfb7g4qWY0YS5imI82dTg+QahUvJ8YqAY0P10Uk8tTyh9ZGuYEZEMaeJYCF5BFuX552hsw==",
      "license": "MIT"
    },
    "node_modules/aws-ssl-profiles": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/aws-ssl-profiles/-/aws-ssl-profiles-1.1.2.tgz",
      "integrity": "sha512-NZKeq9AfyQvEeNlN0zSYAaWrmBffJh3IELMZfRpJVWgrpEbtEpnjvzqBPf+mxoI287JohRDoa+/nsfqqiZmF6g==",
      "license": "MIT",
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/bcrypt": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/bcrypt/-/bcrypt-6.0.0.tgz",
      "integrity": "sha512-cU8v/EGSrnH+HnxV2z0J7/blxH8gq7Xh2JFT6Aroax7UohdmiJJlxApMxtKfuI7z68NvvVcmR78k2LbT6efhRg==",
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "node-addon-api": "^8.3.0",
        "node-gyp-build": "^4.8.4"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/body-parser": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-2.2.2.tgz",
      "integrity": "sha512-oP5VkATKlNwcgvxi0vM0p/D3n2C3EReYVX+DNYs5TjZFn/oQt2j+4sVJtSMr18pdRr8wjTcBl6LoV+FUwzPmNA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "^3.1.2",
        "content-type": "^1.0.5",
        "debug": "^4.4.3",
        "http-errors": "^2.0.0",
        "iconv-lite": "^0.7.0",
        "on-finished": "^2.4.1",
        "qs": "^6.14.1",
        "raw-body": "^3.0.1",
        "type-is": "^2.0.1"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/buffer-equal-constant-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
      "integrity": "sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA==",
      "license": "BSD-3-Clause"
    },
    "node_modules/buffer-from": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",
      "license": "MIT"
    },
    "node_modules/busboy": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/busboy/-/busboy-1.6.0.tgz",
      "integrity": "sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==",
      "dependencies": {
        "streamsearch": "^1.1.0"
      },
      "engines": {
        "node": ">=10.16.0"
      }
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/concat-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-2.0.0.tgz",
      "integrity": "sha512-MWufYdFw53ccGjCA+Ol7XJYpAlW6/prSMzuPOTRnJGcGzuhLn4Scrz7qf6o8bROZ514ltazcIFJZevcfbo0x7A==",
      "engines": [
        "node >= 6.0"
      ],
      "license": "MIT",
      "dependencies": {
        "buffer-from": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^3.0.2",
        "typedarray": "^0.0.6"
      }
    },
    "node_modules/content-disposition": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-1.0.1.tgz",
      "integrity": "sha512-oIXISMynqSqm241k6kcQ5UwttDILMK4BiurCfGEREw6+X9jkkpEe5T9FZaApyLGGOnFuyMWZpdolTXMtvEJ08Q==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz",
      "integrity": "sha512-D76uU73ulSXrD1UXF4KE2TMxVVwhsnCgfAyTg9k8P6KGZjlXKrOLe4dJQKI3Bxi5wjesZoFXJWElNWBjPZMbhg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.6.0"
      }
    },
    "node_modules/cors": {
      "version": "2.8.6",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.6.tgz",
      "integrity": "sha512-tJtZBBHA6vjIAaF6EnIaq6laBBP9aq/Y3ouVJjEfoHbRBcHBAHYcMh/w8LDrk2PvIMMq8gmopa5D4V8RmbrxGw==",
      "license": "MIT",
      "dependencies": {
        "object-assign": "^4",
        "vary": "^1"
      },
      "engines": {
        "node": ">= 0.10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/denque": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/denque/-/denque-2.1.0.tgz",
      "integrity": "sha512-HVQE3AAb/pxF8fQAoiqpvg9i3evqug3hoiwakOyZAwJm+6vZehbkYXZ0l4JxS+I3QxM97v5aaRNhj8v5oBhekw==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/dotenv": {
      "version": "17.3.1",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-17.3.1.tgz",
      "integrity": "sha512-IO8C/dzEb6O3F9/twg6ZLXz164a2fhTnEWb95H23Dm4OuN+92NmEAlTrupP9VW6Jm3sO26tQlqyvyi4CsnY9GA==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "license": "MIT"
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/express": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/express/-/express-5.2.1.tgz",
      "integrity": "sha512-hIS4idWWai69NezIdRt2xFVofaF4j+6INOpJlVOLDO8zXGpUVEVzIYk12UUi2JzjEzWL3IOAxcTubgz9Po0yXw==",
      "license": "MIT",
      "dependencies": {
        "accepts": "^2.0.0",
        "body-parser": "^2.2.1",
        "content-disposition": "^1.0.0",
        "content-type": "^1.0.5",
        "cookie": "^0.7.1",
        "cookie-signature": "^1.2.1",
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "finalhandler": "^2.1.0",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "merge-descriptors": "^2.0.0",
        "mime-types": "^3.0.0",
        "on-finished": "^2.4.1",
        "once": "^1.4.0",
        "parseurl": "^1.3.3",
        "proxy-addr": "^2.0.7",
        "qs": "^6.14.0",
        "range-parser": "^1.2.1",
        "router": "^2.2.0",
        "send": "^1.1.0",
        "serve-static": "^2.2.0",
        "statuses": "^2.0.1",
        "type-is": "^2.0.1",
        "vary": "^1.1.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/finalhandler": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-2.1.1.tgz",
      "integrity": "sha512-S8KoZgRZN+a5rNwqTxlZZePjT/4cnm0ROV70LedRHZ0p8u9fRID0hJUZQpkKLzro8LfmC8sx23bY6tVNxv8pQA==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "on-finished": "^2.4.1",
        "parseurl": "^1.3.3",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz",
      "integrity": "sha512-Rx/WycZ60HOaqLKAi6cHRKKI7zxWbJ31MhntmtwMoaTeF7XFH9hhBp8vITaMidfljRQ6eYWCKkaTK+ykVJHP2A==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/generate-function": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/generate-function/-/generate-function-2.3.1.tgz",
      "integrity": "sha512-eeB5GfMNeevm/GRYq20ShmsaGcmI81kIX2K9XQx5miC8KdHaC6Jm0qQ8ZNeGOi7wYB8OsdxKs+Y2oVuTFuVwKQ==",
      "license": "MIT",
      "dependencies": {
        "is-property": "^1.0.2"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.2.tgz",
      "integrity": "sha512-im9DjEDQ55s9fL4EYzOAv0yMqmMBSZp6G0VvFyTMPKWxiSBHUj9NW/qqLmXUwXrrM7AvqSlTCfvqRb0cM8yYqw==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-promise": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
      "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
      "license": "MIT"
    },
    "node_modules/is-property": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-property/-/is-property-1.0.2.tgz",
      "integrity": "sha512-Ks/IoX00TtClbGQr4TWXemAnktAQvYB7HzcCxDGqEZU6oCmb2INHuOoKxbtR+HFkmYWBKv/dOZtGRiAjDhj92g==",
      "license": "MIT"
    },
    "node_modules/jsonwebtoken": {
      "version": "9.0.3",
      "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-9.0.3.tgz",
      "integrity": "sha512-MT/xP0CrubFRNLNKvxJ2BYfy53Zkm++5bX9dtuPbqAeQpTVe0MQTFhao8+Cp//EmJp244xt6Drw/GVEGCUj40g==",
      "license": "MIT",
      "dependencies": {
        "jws": "^4.0.1",
        "lodash.includes": "^4.3.0",
        "lodash.isboolean": "^3.0.3",
        "lodash.isinteger": "^4.0.4",
        "lodash.isnumber": "^3.0.3",
        "lodash.isplainobject": "^4.0.6",
        "lodash.isstring": "^4.0.1",
        "lodash.once": "^4.0.0",
        "ms": "^2.1.1",
        "semver": "^7.5.4"
      },
      "engines": {
        "node": ">=12",
        "npm": ">=6"
      }
    },
    "node_modules/jwa": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/jwa/-/jwa-2.0.1.tgz",
      "integrity": "sha512-hRF04fqJIP8Abbkq5NKGN0Bbr3JxlQ+qhZufXVr0DvujKy93ZCbXZMHDL4EOtodSbCWxOqR8MS1tXA5hwqCXDg==",
      "license": "MIT",
      "dependencies": {
        "buffer-equal-constant-time": "^1.0.1",
        "ecdsa-sig-formatter": "1.0.11",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/jws": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/jws/-/jws-4.0.1.tgz",
      "integrity": "sha512-EKI/M/yqPncGUUh44xz0PxSidXFr/+r0pA70+gIYhjv+et7yxM+s29Y+VGDkovRofQem0fs7Uvf4+YmAdyRduA==",
      "license": "MIT",
      "dependencies": {
        "jwa": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/lodash.includes": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
      "integrity": "sha512-W3Bx6mdkRTGtlJISOvVD/lbqjTlPPUDTMnlXZFnVwi9NKJ6tiAk6LVdlhZMm17VZisqhKcgzpO5Wz91PCt5b0w==",
      "license": "MIT"
    },
    "node_modules/lodash.isboolean": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
      "integrity": "sha512-Bz5mupy2SVbPHURB98VAcw+aHh4vRV5IPNhILUCsOzRmsTmSQ17jIuqopAentWoehktxGd9e/hbIXq980/1QJg==",
      "license": "MIT"
    },
    "node_modules/lodash.isinteger": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
      "integrity": "sha512-DBwtEWN2caHQ9/imiNeEA5ys1JoRtRfY3d7V9wkqtbycnAmTvRRmbHKDV4a0EYc678/dia0jrte4tjYwVBaZUA==",
      "license": "MIT"
    },
    "node_modules/lodash.isnumber": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
      "integrity": "sha512-QYqzpfwO3/CWf3XP+Z+tkQsfaLL/EnUlXWVkIk5FUPc4sBdTehEqZONuyRt2P67PXAk+NXmTBcc97zw9t1FQrw==",
      "license": "MIT"
    },
    "node_modules/lodash.isplainobject": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
      "integrity": "sha512-oSXzaWypCMHkPC3NvBEaPHf0KsA5mvPrOPgQWDsbg8n7orZ290M0BmC/jgRZ4vcJ6DTAhjrsSYgdsW/F+MFOBA==",
      "license": "MIT"
    },
    "node_modules/lodash.isstring": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
      "integrity": "sha512-0wJxfxH1wgO3GrbuP+dTTk7op+6L41QCXbGINEmD+ny/G/eCqGzxyCsh7159S+mgDDcoarnBw6PC1PS5+wUGgw==",
      "license": "MIT"
    },
    "node_modules/lodash.once": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
      "integrity": "sha512-Sb487aTOCr9drQVL8pIxOzVhafOjZN9UU54hiN8PU3uAiSV7lx1yYNpbNmex2PK6dSJoNTSJUUswT651yww3Mg==",
      "license": "MIT"
    },
    "node_modules/long": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/long/-/long-5.3.2.tgz",
      "integrity": "sha512-mNAgZ1GmyNhD7AuqnTG3/VQ26o760+ZYBPKjPvugO8+nLbYfX6TVpJPseBvopbdY+qpZ/lKUnmEc1LeZYS3QAA==",
      "license": "Apache-2.0"
    },
    "node_modules/lru.min": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/lru.min/-/lru.min-1.1.4.tgz",
      "integrity": "sha512-DqC6n3QQ77zdFpCMASA1a3Jlb64Hv2N2DciFGkO/4L9+q/IpIAuRlKOvCXabtRW6cQf8usbmM6BE/TOPysCdIA==",
      "license": "MIT",
      "engines": {
        "bun": ">=1.0.0",
        "deno": ">=1.30.0",
        "node": ">=8.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wellwelwel"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/media-typer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz",
      "integrity": "sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/merge-descriptors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz",
      "integrity": "sha512-Snk314V5ayFLhp3fkUREub6WtjBfPdCPY1Ln8/8munuLuiYhsABgBVWsozAG+MWMbVEvcdcpbi9R7ww22l9Q3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.2.tgz",
      "integrity": "sha512-Lbgzdk0h4juoQ9fCKXW4by0UJqj+nOOrI9MJ1sSj4nI8aI2eo1qmvQEie4VD1glsS250n15LsWsYtCugiStS5A==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/multer": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/multer/-/multer-2.1.0.tgz",
      "integrity": "sha512-TBm6j41rxNohqawsxlsWsNNh/VdV4QFXcBvRcPhXaA05EZ79z0qJ2bQFpync6JBoHTeNY5Q1JpG7AlTjdlfAEA==",
      "license": "MIT",
      "dependencies": {
        "append-field": "^1.0.0",
        "busboy": "^1.6.0",
        "concat-stream": "^2.0.0",
        "type-is": "^1.6.18"
      },
      "engines": {
        "node": ">= 10.16.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/multer/node_modules/media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/multer/node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/multer/node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/multer/node_modules/type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "license": "MIT",
      "dependencies": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mysql2": {
      "version": "3.18.2",
      "resolved": "https://registry.npmjs.org/mysql2/-/mysql2-3.18.2.tgz",
      "integrity": "sha512-UfEShBFAZZEAKjySnTUuE7BgqkYT4mx+RjoJ5aqtmwSSvNcJ/QxQPXz/y3jSxNiVRedPfgccmuBtiPCSiEEytw==",
      "license": "MIT",
      "dependencies": {
        "aws-ssl-profiles": "^1.1.2",
        "denque": "^2.1.0",
        "generate-function": "^2.3.1",
        "iconv-lite": "^0.7.2",
        "long": "^5.3.2",
        "lru.min": "^1.1.4",
        "named-placeholders": "^1.1.6",
        "sql-escaper": "^1.3.3"
      },
      "engines": {
        "node": ">= 8.0"
      },
      "peerDependencies": {
        "@types/node": ">= 8"
      }
    },
    "node_modules/named-placeholders": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/named-placeholders/-/named-placeholders-1.1.6.tgz",
      "integrity": "sha512-Tz09sEL2EEuv5fFowm419c1+a/jSMiBjI9gHxVLrVdbUkkNUUfjsVYs9pVZu5oCon/kmRh9TfLEObFtkVxmY0w==",
      "license": "MIT",
      "dependencies": {
        "lru.min": "^1.1.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/negotiator": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
      "integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/node-addon-api": {
      "version": "8.6.0",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-8.6.0.tgz",
      "integrity": "sha512-gBVjCaqDlRUk0EwoPNKzIr9KkS9041G/q31IBShPs1Xz6UTA+EXdZADbzqAJQrpDRq71CIMnOP5VMut3SL0z5Q==",
      "license": "MIT",
      "engines": {
        "node": "^18 || ^20 || >= 21"
      }
    },
    "node_modules/node-gyp-build": {
      "version": "4.8.4",
      "resolved": "https://registry.npmjs.org/node-gyp-build/-/node-gyp-build-4.8.4.tgz",
      "integrity": "sha512-LA4ZjwlnUblHVgq0oBF3Jl/6h/Nvs5fzBLwdEF4nuxnFdsfajde4WfxtJr3CaiH+F6ewcIB/q4jQ4UzPyid+CQ==",
      "license": "MIT",
      "bin": {
        "node-gyp-build": "bin.js",
        "node-gyp-build-optional": "optional.js",
        "node-gyp-build-test": "build-test.js"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.3.0.tgz",
      "integrity": "sha512-7jdwVIRtsP8MYpdXSwOS0YdD0Du+qOoF/AEPIt88PcCFrZCzx41oxku1jD88hZBwbNUIEfpqvuhjFaMAqMTWnA==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/qs": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.15.0.tgz",
      "integrity": "sha512-mAZTtNCeetKMH+pSjrb76NAM8V9a05I9aBZOHztWy/UqcJdQYNsf59vrRKWnojAT9Y+GbIvoTBC++CPHqpDBhQ==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/raw-body": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.2.tgz",
      "integrity": "sha512-K5zQjDllxWkf7Z5xJdV0/B0WTNqx6vxG70zJE4N0kBs4LovmEYWJzQGxC9bS9RAKu3bgM40lrd5zoLJ12MQ5BA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.7.0",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/readable-stream": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
      "integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
      "license": "MIT",
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/router": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/router/-/router-2.2.0.tgz",
      "integrity": "sha512-nLTrUKm2UyiL7rlhapu/Zl45FwNgkZGaCpZbIHajDYgwlJCOzLSk+cIPAnsEqV955GjILJnKbdQC1nVPz+gAYQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "is-promise": "^4.0.0",
        "parseurl": "^1.3.3",
        "path-to-regexp": "^8.0.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.7.4",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.4.tgz",
      "integrity": "sha512-vFKC2IEtQnVhpT78h1Yp8wzwrf8CM+MzKMHGJZfBtzhZNycRFnXsHk6E5TxIkkMsgNS7mdX3AGB7x2QM2di4lA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/send/-/send-1.2.1.tgz",
      "integrity": "sha512-1gnZf7DFcoIcajTjTwjwuDjzuz4PPcY2StKPlsGAQ1+YH20IRVrBaXSWmdjowTJ6u8Rc01PoYOGHXfP1mYcZNQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.3",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.1",
        "mime-types": "^3.0.2",
        "ms": "^2.1.3",
        "on-finished": "^2.4.1",
        "range-parser": "^1.2.1",
        "statuses": "^2.0.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/serve-static": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-2.2.1.tgz",
      "integrity": "sha512-xRXBn0pPqQTVQiC8wyQrKs2MOlX24zQ0POGaj0kultvoOCstBQM5yvOhAVSUwOMjQtTvsPWoNCHfPGwaaQJhTw==",
      "license": "MIT",
      "dependencies": {
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "parseurl": "^1.3.3",
        "send": "^1.2.0"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "license": "ISC"
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
      "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/sql-escaper": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/sql-escaper/-/sql-escaper-1.3.3.tgz",
      "integrity": "sha512-BsTCV265VpTp8tm1wyIm1xqQCS+Q9NHx2Sr+WcnUrgLrQ6yiDIvHYJV5gHxsj1lMBy2zm5twLaZao8Jd+S8JJw==",
      "license": "MIT",
      "engines": {
        "bun": ">=1.0.0",
        "deno": ">=2.0.0",
        "node": ">=12.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/mysqljs/sql-escaper?sponsor=1"
      }
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/streamsearch": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-1.1.0.tgz",
      "integrity": "sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
      "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.2.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/type-is": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-2.0.1.tgz",
      "integrity": "sha512-OZs6gsjF4vMp32qrCbiVSkrFmXtG/AZhY3t0iAMrMBiAZyV9oALtXO8hsrHbMXF9x6L3grlFuwW2oAz7cav+Gw==",
      "license": "MIT",
      "dependencies": {
        "content-type": "^1.0.5",
        "media-typer": "^1.1.0",
        "mime-types": "^3.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/typedarray": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha512-/aCDEGatGvZ2BIk+HmLf4ifCJFwvKFNb9/JeZPMulfgFracn9QFcAf5GO8B/mweUjSoblS5In0cWhqpfs/5PQA==",
      "license": "MIT"
    },
    "node_modules/undici-types": {
      "version": "7.18.2",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.18.2.tgz",
      "integrity": "sha512-AsuCzffGHJybSaRrmr5eHr81mwJU3kjw6M+uprWvCXiNeN9SOGwQ3Jn8jb8m3Z6izVgknn1R0FTCEAP2QrLY/w==",
      "license": "MIT",
      "peer": true
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "license": "MIT"
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    }
  }
}
```

### backend\src\app.js

`$lang
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static uploads folder
app.use("/uploads", express.static("uploads"));

// Root test route
app.get("/", (req, res) => {
  res.send("LMS Backend Running ðŸš€");
});

// ================= ROUTES =================

// Import routes
const studentRoutes = require("./modules/students/students.routes");

const authRoutes = require("./modules/auth/auth.routes");
const coursesRoutes = require("./modules/courses/courses.routes");
const usersRoutes = require("./modules/users/users.routes");
const assignmentsRoutes = require("./modules/assignments/assignments.routes");
const quizzesRoutes = require("./modules/quizzes/quizzes.routes");
const certificatesRoutes = require("./modules/certificates/certificates.routes");
const notificationsRoutes = require("./modules/notifications/notifications.routes");
const adminRoutes = require("./modules/admin/admin.routes");


// Mount routes
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/assignments', assignmentsRoutes);
app.use('/api/quizzes', quizzesRoutes);
app.use('/api/certificates', certificatesRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/admin', adminRoutes);

// Serve frontend static files from workspace root so pages load in browser
app.use(express.static(path.join(__dirname, '..', '..')));

// ================= EXPORT =================
module.exports = app;
```

### backend\src\config\db.js

`$lang
const mysql = require("mysql2");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

module.exports = db;
```

### backend\src\middleware\adminMiddleware.js

`$lang
const jwt = require('jsonwebtoken');

const verifyAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    if (decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = verifyAdmin;
```

### backend\src\middleware\authMiddleware.js

`$lang
const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
	const authHeader = req.headers.authorization || req.headers.Authorization;
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return res.status(401).json({ error: 'Unauthorized' });
	}

	const token = authHeader.split(' ')[1];

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = { id: decoded.id, role: decoded.role };
		next();
	} catch (err) {
		return res.status(401).json({ error: 'Invalid token' });
	}
}

module.exports = authMiddleware;
```

### backend\src\modules\admin\admin.routes.js

`$lang
const express = require('express');
const router = express.Router();
const db = require('../../config/db');
const verifyAdmin = require('../../middleware/adminMiddleware');

// =========== COURSE MANAGEMENT ===========

// POST /api/admin/courses - Create course
router.post('/courses', verifyAdmin, async (req, res) => {
  try {
    const { title, description, duration_weeks, mode, language, image } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'Course title is required' });
    }

    const [result] = await db.promise().query(
      'INSERT INTO courses (title, description, duration_weeks, mode, language, image) VALUES (?, ?, ?, ?, ?, ?)',
      [title, description || '', duration_weeks || 0, mode || 'Online', language || 'English', image || '']
    );

    res.json({ message: 'Course created', courseId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/admin/courses/:id - Update course
router.put('/courses/:id', verifyAdmin, async (req, res) => {
  try {
    const courseId = req.params.id;
    const { title, description, duration_weeks, mode, language, image } = req.body;

    const [result] = await db.promise().query(
      'UPDATE courses SET title=?, description=?, duration_weeks=?, mode=?, language=?, image=? WHERE id=?',
      [title, description, duration_weeks, mode, language, image, courseId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json({ message: 'Course updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/admin/courses/:id - Delete course
router.delete('/courses/:id', verifyAdmin, async (req, res) => {
  try {
    const courseId = req.params.id;

    const [result] = await db.promise().query('DELETE FROM courses WHERE id=?', [courseId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json({ message: 'Course deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// =========== MODULE MANAGEMENT ===========

// POST /api/admin/modules - Create module
router.post('/modules', verifyAdmin, async (req, res) => {
  try {
    const { course_id, title, position } = req.body;

    if (!course_id || !title) {
      return res.status(400).json({ error: 'Course ID and title are required' });
    }

    const [result] = await db.promise().query(
      'INSERT INTO modules (course_id, title, position) VALUES (?, ?, ?)',
      [course_id, title, position || 0]
    );

    res.json({ message: 'Module created', moduleId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// =========== LESSON MANAGEMENT ===========

// POST /api/admin/lessons - Create lesson
router.post('/lessons', verifyAdmin, async (req, res) => {
  try {
    const { module_id, title, video_url, position } = req.body;

    if (!module_id || !title) {
      return res.status(400).json({ error: 'Module ID and title are required' });
    }

    const [result] = await db.promise().query(
      'INSERT INTO lessons (module_id, title, video_url, position) VALUES (?, ?, ?, ?)',
      [module_id, title, video_url || '', position || 0]
    );

    res.json({ message: 'Lesson created', lessonId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// =========== ASSIGNMENT MANAGEMENT ===========

// POST /api/admin/assignments - Create assignment
router.post('/assignments', verifyAdmin, async (req, res) => {
  try {
    const { course_id, module_id, title, description, due_date, points } = req.body;

    if (!course_id || !title) {
      return res.status(400).json({ error: 'Course ID and title are required' });
    }

    const [result] = await db.promise().query(
      'INSERT INTO assignments (course_id, module_id, title, description, due_date, points) VALUES (?, ?, ?, ?, ?, ?)',
      [course_id, module_id || null, title, description || '', due_date || null, points || 100]
    );

    res.json({ message: 'Assignment created', assignmentId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// =========== QUIZ MANAGEMENT ===========

// POST /api/admin/quizzes - Create quiz
router.post('/quizzes', verifyAdmin, async (req, res) => {
  try {
    const { course_id, title, total_marks, duration_minutes } = req.body;

    if (!course_id || !title) {
      return res.status(400).json({ error: 'Course ID and title are required' });
    }

    const [result] = await db.promise().query(
      'INSERT INTO quizzes (course_id, title, total_marks, duration_minutes) VALUES (?, ?, ?, ?)',
      [course_id, title, total_marks || 100, duration_minutes || 0]
    );

    res.json({ message: 'Quiz created', quizId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// =========== STUDENT MANAGEMENT ===========

// GET /api/admin/students - Get all students
router.get('/students', verifyAdmin, async (req, res) => {
  try {
    const [rows] = await db.promise().query(
      'SELECT id, name, email, created_at FROM users WHERE role="student" ORDER BY created_at DESC'
    );

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// =========== ENROLLMENT MANAGEMENT ===========

// GET /api/admin/enrollments - Get all enrollments
router.get('/enrollments', verifyAdmin, async (req, res) => {
  try {
    const [rows] = await db.promise().query(
      `SELECT 
        e.id, 
        e.user_id, 
        u.name as student_name,
        e.course_id, 
        c.title as course_title,
        e.progress, 
        e.status, 
        e.enrolled_at
      FROM enrollments e
      JOIN users u ON e.user_id = u.id
      JOIN courses c ON e.course_id = c.id
      ORDER BY e.enrolled_at DESC`
    );

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// =========== ANALYTICS ===========

// GET /api/admin/analytics - Get platform analytics
router.get('/analytics', verifyAdmin, async (req, res) => {
  try {
    const [totalStudents] = await db.promise().query(
      'SELECT COUNT(*) as total FROM users WHERE role="student"'
    );
    
    const [totalCourses] = await db.promise().query(
      'SELECT COUNT(*) as total FROM courses'
    );
    
    const [totalEnrollments] = await db.promise().query(
      'SELECT COUNT(*) as total FROM enrollments'
    );
    
    const [completedEnrollments] = await db.promise().query(
      'SELECT COUNT(*) as total FROM enrollments WHERE status="completed"'
    );
    
    const [certificatesIssued] = await db.promise().query(
      'SELECT COUNT(*) as total FROM certificates'
    );

    res.json({
      totalStudents: totalStudents[0].total,
      totalCourses: totalCourses[0].total,
      totalEnrollments: totalEnrollments[0].total,
      completedEnrollments: completedEnrollments[0].total,
      certificatesIssued: certificatesIssued[0].total
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
```

### backend\src\modules\assignments\assignments.routes.js

`$lang
const express = require('express');
const router = express.Router();
const db = require('../../config/db');
const auth = require('../../middleware/authMiddleware');

// GET /api/assignments/:courseId
router.get('/:courseId', async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const [assignments] = await db.promise().query('SELECT * FROM assignments WHERE course_id = ?', [courseId]);

    for (const a of assignments) {
      const [qs] = await db.promise().query('SELECT id,question,type,options FROM assignment_questions WHERE assignment_id = ?', [a.id]);
      a.questions = qs;
    }

    res.json(assignments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/assignments/submit
router.post('/submit', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const { assignment_id, answers } = req.body; // answers: {questionId: answer}
    if (!assignment_id || !answers) return res.status(400).json({ error: 'Missing parameters' });

    const [questions] = await db.promise().query('SELECT id,correct_answer,marks FROM assignment_questions WHERE assignment_id = ?', [assignment_id]);

    let totalMarks = 0;
    let obtained = 0;
    for (const q of questions) {
      totalMarks += q.marks || 1;
      const ans = answers[q.id];
      if (ans != null && q.correct_answer != null) {
        if (String(ans).trim() === String(q.correct_answer).trim()) obtained += (q.marks || 1);
      }
    }

    await db.promise().query('INSERT INTO assignment_submissions (assignment_id,user_id,answers,marks,status) VALUES (?,?,?,?,?)', [assignment_id, userId, JSON.stringify(answers), obtained, 'submitted']);

    // create notification
    await db.promise().query('INSERT INTO notifications (user_id,type,message,link) VALUES (?,?,?,?)', [userId, 'assignment', `Assignment ${assignment_id} submitted. Score: ${obtained}/${totalMarks}`, null]);

    res.json({ message: 'Submitted', marks: obtained, total: totalMarks });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
```

### backend\src\modules\auth\auth.routes.js

`$lang
const express = require("express");
const router = express.Router();
const db = require("../../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const [results] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);

    if (results.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(400).json({ error: 'Invalid password' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if user already exists
    const [existing] = await db.promise().query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const [result] = await db.promise().query(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, 'student']
    );

    const userId = result.insertId;

    // Generate token
    const token = jwt.sign({ id: userId, role: 'student' }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({
      message: 'Registered Successfully',
      token,
      user: { id: userId, name, email, role: 'student' }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
```

### backend\src\modules\certificates\certificates.routes.js

`$lang
const express = require('express');
const router = express.Router();
const db = require('../../config/db');
const path = require('path');

// GET /api/certificates/:studentId
router.get('/:studentId', async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const [rows] = await db.promise().query(`
      SELECT c.id, c.course_id, cr.title as course_title, c.issued_at, c.file_path
      FROM certificates c
      JOIN courses cr ON cr.id = c.course_id
      WHERE c.user_id = ?
    `, [studentId]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
```

### backend\src\modules\courses\courses.routes.js

`$lang
const express = require('express');
const router = express.Router();
const db = require('../../config/db');
// enrollment will accept user_id in body if auth not provided

// GET /api/courses  - list courses with optional filters
router.get('/', async (req, res) => {
  try {
    const { mode, duration, language, search } = req.query;

    let sql = 'SELECT * FROM courses WHERE 1=1';
    const params = [];

    if (mode) { sql += ' AND mode = ?'; params.push(mode); }
    if (duration) { sql += ' AND duration_weeks = ?'; params.push(duration); }
    if (language) { sql += ' AND language = ?'; params.push(language); }
    if (search) { sql += ' AND title LIKE ?'; params.push('%' + search + '%'); }

    const [rows] = await db.promise().query(sql, params);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/courses/:id - get single course details
router.get('/:id', async (req, res) => {
  try {
    const courseId = req.params.id;
    const [rows] = await db.promise().query('SELECT * FROM courses WHERE id = ?', [courseId]);
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/courses/:id/enroll-count - get number of enrolled students
router.get('/:id/enroll-count', async (req, res) => {
  try {
    const courseId = req.params.id;
    const [rows] = await db.promise().query('SELECT COUNT(*) as count FROM enrollments WHERE course_id = ?', [courseId]);
    
    res.json({ enrollmentCount: rows[0].count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/courses/:courseId/check-enrollment/:userId - check if user is enrolled
router.get('/:courseId/check-enrollment/:userId', async (req, res) => {
  try {
    const { courseId, userId } = req.params;
    const [rows] = await db.promise().query('SELECT * FROM enrollments WHERE user_id = ? AND course_id = ?', [userId, courseId]);
    
    if (rows.length > 0) {
      res.json({ enrolled: true, enrollment: rows[0] });
    } else {
      res.json({ enrolled: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/courses/:id/modules - return modules and lessons
router.get('/:id/modules', async (req, res) => {
  try {
    const courseId = req.params.id;
    const [modules] = await db.promise().query('SELECT id,title,position FROM modules WHERE course_id = ? ORDER BY position', [courseId]);

    for (const mod of modules) {
      const [lessons] = await db.promise().query('SELECT id,title,video_url,position FROM lessons WHERE module_id = ? ORDER BY position', [mod.id]);
      mod.lessons = lessons;
    }

    res.json({ modules });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/courses/enroll - enroll a user in a course
router.post('/enroll', async (req, res) => {
  try {
    // allow passing user_id in body for frontend testing
    const userId = (req.headers && req.headers.authorization) ? (req.user && req.user.id) : req.body.user_id;
    const { course_id } = req.body;
    if (!userId || !course_id) return res.status(400).json({ error: 'Missing parameters' });

    // check existing
    const [exists] = await db.promise().query('SELECT * FROM enrollments WHERE user_id = ? AND course_id = ?', [userId, course_id]);
    if (exists.length > 0) return res.status(400).json({ error: 'Already enrolled' });

    await db.promise().query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,0,?)', [userId, course_id, 'ongoing']);
    res.json({ message: 'Enrolled' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
```

### backend\src\modules\notifications\notifications.routes.js

`$lang
const express = require('express');
const router = express.Router();
const db = require('../../config/db');

// GET /api/notifications/:studentId
router.get('/:studentId', async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const [rows] = await db.promise().query('SELECT id,type,message,is_read,link,created_at FROM notifications WHERE user_id = ? ORDER BY created_at DESC LIMIT 50', [studentId]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
```

### backend\src\modules\quizzes\quizzes.routes.js

`$lang
const express = require('express');
const router = express.Router();
const db = require('../../config/db');
const auth = require('../../middleware/authMiddleware');

// GET /api/quizzes/:courseId
router.get('/:courseId', async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const [quizzes] = await db.promise().query('SELECT * FROM quizzes WHERE course_id = ?', [courseId]);
    for (const q of quizzes) {
      const [qs] = await db.promise().query('SELECT id,question,options,marks FROM quiz_questions WHERE quiz_id = ?', [q.id]);
      q.questions = qs;
    }
    res.json(quizzes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/quizzes/submit
router.post('/submit', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const { quiz_id, answers } = req.body; // answers: {questionId: selectedIndex}
    if (!quiz_id || !answers) return res.status(400).json({ error: 'Missing parameters' });

    const [questions] = await db.promise().query('SELECT id,correct_option,marks FROM quiz_questions WHERE quiz_id = ?', [quiz_id]);
    let total = 0, score = 0;
    for (const q of questions) {
      total += q.marks || 1;
      const sel = answers[q.id];
      if (sel != null && q.correct_option != null && Number(sel) === Number(q.correct_option)) score += (q.marks || 1);
    }

    await db.promise().query('INSERT INTO quiz_results (quiz_id,user_id,score,total) VALUES (?,?,?,?)', [quiz_id, userId, score, total]);

    await db.promise().query('INSERT INTO notifications (user_id,type,message,link) VALUES (?,?,?,?)', [userId, 'quiz', `Quiz ${quiz_id} submitted. Score: ${score}/${total}`, null]);

    res.json({ score, total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
```

### backend\src\modules\students\students.routes.js

`$lang
const express = require("express");
const router = express.Router();
const db = require("../../config/db");

// GET Student Dashboard
router.get("/:id/dashboard", (req, res) => {
  const studentId = req.params.id;

  const query = `
    SELECT 
      u.id,
      u.name,
      u.email,
      c.id AS course_id,
      c.title,
      e.progress,
      e.status
    FROM users u
    JOIN enrollments e ON u.id = e.user_id
    JOIN courses c ON c.id = e.course_id
    WHERE u.id = ?
  `;

  db.query(query, [studentId], (err, results) => {
if (err) {
  console.error("FULL DB ERROR:", err);
  return res.status(500).json({ error: err.message });
}
    if (results.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    const student = {
      id: results[0].id,
      name: results[0].name,
      email: results[0].email,
      courses: results.map(r => ({
        course_id: r.course_id,
        title: r.title,
        progress: r.progress,
        status: r.status
      }))
    };

    res.json(student);
  });
});


// GET /api/students/:id/courses -> enrolled courses
router.get('/:id/courses', async (req, res) => {
  try {
    const studentId = req.params.id;
    const [rows] = await db.promise().query(`
      SELECT e.course_id, c.title, c.description, c.duration_weeks, e.progress, e.status, c.image
      FROM enrollments e
      JOIN courses c ON c.id = e.course_id
      WHERE e.user_id = ?
      ORDER BY e.enrolled_at DESC
    `, [studentId]);

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


// POST /api/progress/update -> mark lesson complete and update course progress
router.post('/progress/update', async (req, res) => {
  try {
    const { user_id, course_id, lesson_id } = req.body;
    const userId = user_id;
    if (!userId || !course_id || !lesson_id) return res.status(400).json({ error: 'Missing parameters' });

    // insert course_progress if not exists
    const [exists] = await db.promise().query('SELECT * FROM course_progress WHERE user_id = ? AND lesson_id = ?', [userId, lesson_id]);
    if (exists.length === 0) {
      await db.promise().query('INSERT INTO course_progress (user_id,course_id,lesson_id,completed,completed_at) VALUES (?,?,?,?,NOW())', [userId, course_id, lesson_id, 1]);
    }

    // calculate progress
    const [totalRes] = await db.promise().query('SELECT COUNT(*) AS total FROM lessons l JOIN modules m ON l.module_id = m.id WHERE m.course_id = ?', [course_id]);
    const total = totalRes[0].total || 0;
    const [doneRes] = await db.promise().query('SELECT COUNT(*) AS done FROM course_progress WHERE user_id = ? AND course_id = ?', [userId, course_id]);
    const done = doneRes[0].done || 0;
    const progress = total === 0 ? 0 : Math.round((done / total) * 100);

    await db.promise().query('UPDATE enrollments SET progress = ? WHERE user_id = ? AND course_id = ?', [progress, userId, course_id]);

    // if completed give certificate
    if (progress >= 100) {
      await db.promise().query('UPDATE enrollments SET status = ? WHERE user_id = ? AND course_id = ?', ['completed', userId, course_id]);
      const [cert] = await db.promise().query('SELECT * FROM certificates WHERE user_id = ? AND course_id = ?', [userId, course_id]);
      if (cert.length === 0) {
        await db.promise().query('INSERT INTO certificates (user_id,course_id,file_path) VALUES (?,?,?)', [userId, course_id, null]);
      }
    }

    res.json({ progress });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


// GET /api/students/:id/completed -> completed courses
router.get('/:id/completed', async (req, res) => {
  try {
    const studentId = req.params.id;
    const [rows] = await db.promise().query(`
      SELECT e.course_id, c.title, c.description, c.duration_weeks, e.progress, e.status, c.image
      FROM enrollments e
      JOIN courses c ON c.id = e.course_id
      WHERE e.user_id = ? AND e.status = 'completed'
      ORDER BY e.enrolled_at DESC
    `, [studentId]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
```

### backend\src\modules\users\users.routes.js

`$lang
const express = require('express');
const router = express.Router();
const db = require('../../config/db');
const auth = require('../../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/profile');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const userId = req.user?.id || req.body.user_id || 'anon';
    cb(null, `profile_${userId}${ext}`);
  }
});

const upload = multer({ storage });

// GET /api/users/profile
router.get('/profile', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const [rows] = await db.promise().query('SELECT id,name,email,phone,profile_image FROM users WHERE id = ?', [userId]);
    if (rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/users/profile
router.put('/profile', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email, phone } = req.body;
    await db.promise().query('UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?', [name, email, phone, userId]);
    res.json({ message: 'Profile updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/users/upload-photo
router.post('/upload-photo', auth, upload.single('photo'), async (req, res) => {
  try {
    const userId = req.user.id;
    if (!req.file) return res.status(400).json({ error: 'No file' });
    const filePath = `/uploads/profile/${req.file.filename}`;
    await db.promise().query('UPDATE users SET profile_image = ? WHERE id = ?', [filePath, userId]);
    res.json({ message: 'Uploaded', file: filePath });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
```

### backend\src\scripts\seed.js

`$lang
require('dotenv').config();
const db = require('../config/db');
const bcrypt = require('bcrypt');

async function run() {
  try {
    const pool = db.promise();

    console.log('Dropping existing tables and creating fresh schema...');

    await pool.query('SET FOREIGN_KEY_CHECKS = 0');

    // Drop tables in order to reset schema (reverse dependency order)
    await pool.query('DROP TABLE IF EXISTS notifications');
    await pool.query('DROP TABLE IF EXISTS certificates');
    await pool.query('DROP TABLE IF EXISTS quiz_results');
    await pool.query('DROP TABLE IF EXISTS quiz_questions');
    await pool.query('DROP TABLE IF EXISTS quizzes');
    await pool.query('DROP TABLE IF EXISTS assignment_submissions');
    await pool.query('DROP TABLE IF EXISTS assignment_questions');
    await pool.query('DROP TABLE IF EXISTS assignments');
    await pool.query('DROP TABLE IF EXISTS course_progress');
    await pool.query('DROP TABLE IF EXISTS enrollments');
    await pool.query('DROP TABLE IF EXISTS lessons');
    await pool.query('DROP TABLE IF EXISTS modules');
    await pool.query('DROP TABLE IF EXISTS courses');
    await pool.query('DROP TABLE IF EXISTS course_enrollments');
    await pool.query('DROP TABLE IF EXISTS users');
    await pool.query('SET FOREIGN_KEY_CHECKS = 1');

    console.log('Creating tables...');

    // USERS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role ENUM('student','admin') NOT NULL DEFAULT 'student',
        phone VARCHAR(50),
        profile_image VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // COURSES
    await pool.query(`
      CREATE TABLE IF NOT EXISTS courses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        duration_weeks INT DEFAULT 0,
        mode VARCHAR(50),
        language VARCHAR(50),
        image VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // MODULES
    await pool.query(`
      CREATE TABLE IF NOT EXISTS modules (
        id INT AUTO_INCREMENT PRIMARY KEY,
        course_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        position INT DEFAULT 0,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // LESSONS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS lessons (
        id INT AUTO_INCREMENT PRIMARY KEY,
        module_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        video_url VARCHAR(512),
        position INT DEFAULT 0,
        FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // ENROLLMENTS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS enrollments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        course_id INT NOT NULL,
        enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        progress INT DEFAULT 0,
        status ENUM('ongoing','completed') DEFAULT 'ongoing',
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // ASSIGNMENTS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS assignments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        course_id INT NOT NULL,
        module_id INT,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        due_date DATETIME,
        points INT DEFAULT 100,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
        FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE SET NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // ASSIGNMENT QUESTIONS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS assignment_questions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        assignment_id INT NOT NULL,
        question TEXT NOT NULL,
        type ENUM('text','mcq') DEFAULT 'text',
        options JSON,
        correct_answer VARCHAR(255),
        FOREIGN KEY (assignment_id) REFERENCES assignments(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // ASSIGNMENT SUBMISSIONS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS assignment_submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        assignment_id INT NOT NULL,
        user_id INT NOT NULL,
        answers JSON,
        marks INT DEFAULT 0,
        status ENUM('submitted','graded') DEFAULT 'submitted',
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        file_url VARCHAR(255),
        FOREIGN KEY (assignment_id) REFERENCES assignments(id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // QUIZZES
    await pool.query(`
      CREATE TABLE IF NOT EXISTS quizzes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        course_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        total_marks INT DEFAULT 100,
        duration_minutes INT DEFAULT 0,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // QUIZ QUESTIONS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS quiz_questions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        quiz_id INT NOT NULL,
        question TEXT NOT NULL,
        options JSON,
        correct_option INT,
        marks INT DEFAULT 1,
        FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // QUIZ RESULTS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS quiz_results (
        id INT AUTO_INCREMENT PRIMARY KEY,
        quiz_id INT NOT NULL,
        user_id INT NOT NULL,
        score INT DEFAULT 0,
        total INT DEFAULT 0,
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // COURSE PROGRESS (per lesson)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS course_progress (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        course_id INT NOT NULL,
        lesson_id INT NOT NULL,
        completed TINYINT(1) DEFAULT 0,
        completed_at TIMESTAMP NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
        FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // CERTIFICATES
    await pool.query(`
      CREATE TABLE IF NOT EXISTS certificates (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        course_id INT NOT NULL,
        issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        file_path VARCHAR(255),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // NOTIFICATIONS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS notifications (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        type VARCHAR(100),
        message TEXT,
        is_read TINYINT(1) DEFAULT 0,
        link VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    console.log('Seeding initial data...');

    // Clear existing data (safe for development)
    await pool.query('DELETE FROM notifications');
    await pool.query('DELETE FROM certificates');
    await pool.query('DELETE FROM quiz_results');
    await pool.query('DELETE FROM quiz_questions');
    await pool.query('DELETE FROM quizzes');
    await pool.query('DELETE FROM assignment_submissions');
    await pool.query('DELETE FROM assignment_questions');
    await pool.query('DELETE FROM assignments');
    await pool.query('DELETE FROM course_progress');
    await pool.query('DELETE FROM enrollments');
    await pool.query('DELETE FROM lessons');
    await pool.query('DELETE FROM modules');
    await pool.query('DELETE FROM courses');
    await pool.query('DELETE FROM users');

    // Create users with bcrypt-hashed passwords
    const studentPwd = await bcrypt.hash('pass1234', 10);
    const defaultPwd = await bcrypt.hash('1234', 10);
    const [u1] = await pool.query('INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)', ['Student Demo','student@gmail.com',studentPwd,'student']);
    const [u2] = await pool.query('INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)', ['Pavan','pavan@gmail.com',defaultPwd,'student']);
    const [u3] = await pool.query('INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)', ['Vijay','vijay@gmail.com',defaultPwd,'student']);
    const [a1] = await pool.query('INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)', ['Admin','admin@gmail.com',defaultPwd,'admin']);

    const studentDemoId = u1.insertId;
    const pavanId = u2.insertId;
    const vijayId = u3.insertId;
    const adminId = a1.insertId;

    // Courses
    const courses = [
      ['Machine Learning','Master predictive modeling, neural networks, deep learning systems and real-world AI deployment strategies used in modern industries.',12,'Online','English','assets/ML.jpg'],
      ['DevOps','Learn continuous integration, continuous deployment, infrastructure as code, containerization and cloud management practices.',8,'Hybrid','English','assets/DEVOPS.jpg'],
      ['Generative AI','Explore generative techniques including transformers, diffusion models, and prompt engineering for building intelligent AI systems.',4,'Online','Hindi','assets/GEN AI.jpg'],
      ['Quantum Computing','Understand quantum mechanics fundamentals, quantum algorithms, and quantum computing applications in modern technology.',10,'Online','English','assets/QC.jpg']
    ];

    const courseIds = [];
    for (const c of courses) {
      const [res] = await pool.query('INSERT INTO courses (title,description,duration_weeks,mode,language,image) VALUES (?,?,?,?,?,?)', c);
      courseIds.push(res.insertId);
    }

    // For each course add 2 modules, each with 2 lessons, 1 assignment and 1 quiz
    for (let i = 0; i < courseIds.length; i++) {
      const courseId = courseIds[i];

      for (let m = 1; m <= 2; m++) {
        const [mod] = await pool.query('INSERT INTO modules (course_id,title,position) VALUES (?,?,?)', [courseId, `Module ${m}`, m]);
        const moduleId = mod.insertId;

        for (let l = 1; l <= 2; l++) {
          await pool.query('INSERT INTO lessons (module_id,title,video_url,position) VALUES (?,?,?,?)', [moduleId, `Lesson ${l}`, `https://example.com/videos/course${courseId}_m${m}_l${l}.mp4`, l]);
        }

        // assignment
        const [ass] = await pool.query('INSERT INTO assignments (course_id,module_id,title,description,due_date,points) VALUES (?,?,?,?,DATE_ADD(NOW(), INTERVAL 7 DAY),?)', [courseId, moduleId, `Assignment for Module ${m}`, 'Answer the questions', 100]);
        const assignmentId = ass.insertId;

        await pool.query('INSERT INTO assignment_questions (assignment_id,question,type,options,correct_answer) VALUES (?,?,?,?,?)', [assignmentId, 'Explain key concept of this module.', 'text', null, null]);

        // quiz
        const [q] = await pool.query('INSERT INTO quizzes (course_id,title,total_marks,duration_minutes) VALUES (?,?,?,?)', [courseId, `Quiz Module ${m}`, 20, 15]);
        const quizId = q.insertId;

        await pool.query('INSERT INTO quiz_questions (quiz_id,question,options,correct_option,marks) VALUES (?,?,?,?,?)', [quizId, 'What is 2+2?', JSON.stringify(['1','2','3','4']), 3, 1]);
      }
    }

    // Enroll students according to requirements
    // Student Demo: DevOps (running), Quantum (completed)
    await pool.query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,?,?)', [studentDemoId, courseIds[1], 67, 'ongoing']);
    await pool.query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,?,?)', [studentDemoId, courseIds[3], 100, 'completed']);

    // Pavan: DevOps (completed), Quantum (running), ML (running)
    await pool.query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,?,?)', [pavanId, courseIds[1], 100, 'completed']);
    await pool.query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,?,?)', [pavanId, courseIds[3], 50, 'ongoing']);
    await pool.query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,?,?)', [pavanId, courseIds[0], 35, 'ongoing']);

    // Vijay: Gen AI (completed), DevOps (running), Quantum (running)
    await pool.query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,?,?)', [vijayId, courseIds[2], 100, 'completed']);
    await pool.query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,?,?)', [vijayId, courseIds[1], 60, 'ongoing']);
    await pool.query('INSERT INTO enrollments (user_id,course_id,progress,status) VALUES (?,?,?,?)', [vijayId, courseIds[3], 25, 'ongoing']);

    console.log('Seed complete.');
    process.exit(0);
  }
  catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

run();
```

### backend\src\server.js

`$lang
const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

