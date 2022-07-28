# file-type-issue-demo
Project to reproduce https://github.com/sindresorhus/file-type/issues/550

## Steps to reproduce

1. Clone the repo and install dependencies
2. Run `npm run build`. There will likely be build errors (shown below)
3. Install Node types: `npm i --save-dev @types/node`
4. Run the build step again. It will be working at this point.

## Build Errors
```
> file-type-issue-demo@1.0.0 build
> tsc

index.ts:1:30 - error TS2307: Cannot find module 'node:fs' or its corresponding type declarations.

1 import { readFileSync } from 'node:fs';
                               ~~~~~~~~~

node_modules/file-type/core.d.ts:1:42 - error TS2307: Cannot find module 'node:stream' or its corresponding type declarations.

1 import {Readable as ReadableStream} from 'node:stream';
                                           ~~~~~~~~~~~~~

node_modules/file-type/index.d.ts:1:42 - error TS2307: Cannot find module 'node:stream' or its corresponding type declarations.

1 import {Readable as ReadableStream} from 'node:stream';
                                           ~~~~~~~~~~~~~

node_modules/peek-readable/lib/StreamReader.d.ts:1:23 - error TS2688: Cannot find type definition file for 'node'.

1 /// <reference types="node" />
                        ~~~~

node_modules/peek-readable/lib/StreamReader.d.ts:2:26 - error TS2307: Cannot find module 'node:stream' or its corresponding type declarations.

2 import { Readable } from 'node:stream';
                           ~~~~~~~~~~~~~

node_modules/strtok3/lib/core.d.ts:1:23 - error TS2688: Cannot find type definition file for 'node'.

1 /// <reference types="node" />
                        ~~~~

node_modules/strtok3/lib/core.d.ts:3:26 - error TS2307: Cannot find module 'node:stream' or its corresponding type declarations.

3 import { Readable } from 'node:stream';
                           ~~~~~~~~~~~~~

node_modules/strtok3/lib/ReadStreamTokenizer.d.ts:1:23 - error TS2688: Cannot find type definition file for 'node'.

1 /// <reference types="node" />
                        ~~~~

node_modules/strtok3/lib/ReadStreamTokenizer.d.ts:3:26 - error TS2307: Cannot find module 'node:stream' or its corresponding type declarations.

3 import { Readable } from 'node:stream';
                           ~~~~~~~~~~~~~

node_modules/strtok3/lib/types.d.ts:1:23 - error TS2688: Cannot find type definition file for 'node'.

1 /// <reference types="node" />
                        ~~~~

node_modules/strtok3/lib/types.d.ts:60:24 - error TS2580: Cannot find name 'Buffer'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.

60     peekBuffer(buffer: Buffer, options?: IReadChunkOptions): Promise<number>;
                          ~~~~~~

node_modules/strtok3/lib/types.d.ts:67:24 - error TS2580: Cannot find name 'Buffer'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.

67     readBuffer(buffer: Buffer, options?: IReadChunkOptions): Promise<number>;
                          ~~~~~~


Found 12 errors in 7 files.

Errors  Files
     1  index.ts:1
     1  node_modules/file-type/core.d.ts:1
     1  node_modules/file-type/index.d.ts:1
     2  node_modules/peek-readable/lib/StreamReader.d.ts:1
     2  node_modules/strtok3/lib/core.d.ts:1
     2  node_modules/strtok3/lib/ReadStreamTokenizer.d.ts:1
     3  node_modules/strtok3/lib/types.d.ts:1
```