#!/usr/bin/env node

// require = require("esm")(module /*, options*/);
// require("../src/cli").cli(process.argv);

import { cli } from "./vendor/cli_generate/src/cli.js";

cli(process.argv);
