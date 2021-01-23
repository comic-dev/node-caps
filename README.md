# node-caps

**An easy-to-use module to capitalise an string or array**

**Features**

- Fast, up-to-date code-base with ESM support.
- Typings included

# Explanation

```js
const Caps = require("node-caps");
Caps.def(); /* Default, will only capitalise the first letter of the first word */
Caps.keep(); /* Like Default, but will keep the rest normal */
Caps.all(); /* All, will capitalise all words */
Caps.array(); /* Array, like All but using an array */
Caps.sent(); /* Captialises first word like Default, but capitalises every word after the dot */
Caps.dash(); /* Like Array, but without using an array to split the elements, but an dash (-) */
Caps.reg(); /* Converts an country name to the right capitalization */
Caps.perms(); /* Coverts the standard Discord.js permission display to readable text */
```

# Usage

**Default**

```js
const Caps = require("node-caps");
// Or
import Caps from "node-caps";

Caps.def("hi There"); /* Expected output: 'Hi there' */
```

**Keep**

```js
const Caps = require("node-caps");
// Or
import Caps from "node-caps";

Caps.def("hi There"); /* Expected output: 'Hi There' */
```

**All**

```js
const Caps = require("node-caps");
// Or
import Caps from "node-caps";

Caps.all("hi there"); /* Expected output: 'Hi There' */
```

**Array**

```js
const Caps = require("node-caps");
// Or
import Caps from "node-caps";

Caps.array(["hi", "there"]); /* Expected output: ['Hi', 'There'] */
```

**Sent**

```js
const Caps = require("node-caps");
// Or
import Caps from "node-caps";

Caps.array("hi. there"); /* Expected output: 'Hi. There' */
```

**Dash**

```js
const Caps = require("node-caps");
// Or
import Caps from "node-caps";

Caps.dash("hi-there"); /* Expected output: 'Hi-There' */
```

**Reg**

```js
const Caps = require("node-caps");
// Or
import Caps from "node-caps";

Caps.reg("the netherlands"); /* Expected output: 'The Netherlands' */
// But
Caps.reg("north-us"); /* Expected output: 'North-US' */
```

**Perms**

```js
const Caps = require("node-caps");
// Or
import Caps from "node-caps";

Caps.perms(["ADMINISTRATOR"]); /* Expected output: ['Administrator'] */

// And

Caps.perms(["MANAGE_MESSAGES"]); /* Expected output: ['Manage Messages'] */
```

**_Copyright (c) 2020 simp. & Salvage_**
