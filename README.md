# Express TS MongoDB

## How to run?
- Development: `yarn && yarn dev`
- Production: `yarn && yarn start`

## Routes

| Prefix Verb/header      | Authorization            | Path
| :-----------------------| :------------------------| :-------------------
| GET                     | PUBLIC                   | /v1/records/ping
| POST                    | PUBLIC                   | /v1/records/search


## Tests results
```bash
$ jest --forceExit
 PASS  src/tests/models/record.test.ts
 PASS  src/tests/integration/records.test.ts
 PASS  src/tests/index.test.ts
 INFO (30220 on MacBook-Pro-2.fritz.box): Database connected
 INFO (30220 on MacBook-Pro-2.fritz.box): Database connected
 INFO (30220 on MacBook-Pro-2.fritz.box): GET / 404 45 - 1.492 ms
 INFO (30221 on MacBook-Pro-2.fritz.box): Database connected
 INFO (30221 on MacBook-Pro-2.fritz.box): Database connected
 INFO (30221 on MacBook-Pro-2.fritz.box): GET /v1/records/ping 200 39 - 2.116 ms
 INFO (30221 on MacBook-Pro-2.fritz.box): POST /v1/records/search 200 342 - 124.267 ms
 INFO (30221 on MacBook-Pro-2.fritz.box): POST /v1/records/search 400 49 - 1.093 ms
 INFO (30221 on MacBook-Pro-2.fritz.box): POST /v1/records/search 400 55 - 0.273 ms
-----------------|---------|----------|---------|---------|-------------------
File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------|---------|----------|---------|---------|-------------------
All files        |     100 |      100 |     100 |     100 |
 src             |     100 |      100 |     100 |     100 |
  app.ts         |     100 |      100 |     100 |     100 |
 src/config      |     100 |      100 |     100 |     100 |
  index.ts       |     100 |      100 |     100 |     100 |
 src/controllers |     100 |      100 |     100 |     100 |
  records.ts     |     100 |      100 |     100 |     100 |
 src/models      |     100 |      100 |     100 |     100 |
  record.ts      |     100 |      100 |     100 |     100 |
 src/routes      |     100 |      100 |     100 |     100 |
  records.ts     |     100 |      100 |     100 |     100 |
 src/serializers |     100 |      100 |     100 |     100 |
  Base.ts        |     100 |      100 |     100 |     100 |
  Error.ts       |     100 |      100 |     100 |     100 |
  Record.ts      |     100 |      100 |     100 |     100 |
 src/services    |     100 |      100 |     100 |     100 |
  mongodb.ts     |     100 |      100 |     100 |     100 |
 src/utils       |     100 |      100 |     100 |     100 |
  ApiError.ts    |     100 |      100 |     100 |     100 |
  logger.ts      |     100 |      100 |     100 |     100 |
-----------------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        4.702 s, estimated 5 s
Ran all test suites.
```
