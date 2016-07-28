# DMP: Diff Match Patch

## Development status: Production-ready.

Node.js module based on Neil Fraiser's excellent [Diff Match Patch](https://code.google.com/p/google-diff-match-patch/).

[![npm version](https://badge.fury.io/js/dmp.svg)](http://badge.fury.io/js/dmp)

[![Build Status](https://travis-ci.org/Floobits/dmp.svg)](https://travis-ci.org/Floobits/dmp)

[![Floobits Status](https://floobits.com/Floobits/dmp.svg)](https://floobits.com/Floobits/dmp/redirect)

## Install

Add `dmp` to your `package.json` or `npm install dmp`.

This module requires Node.js v4.0 or later.


## Use

```js
const DMP = require("dmp");
const dmp = new DMP();

let patches = dmp.patch_make("", "abcd");

console.log(dmp.patch_toText(patches));
// @@ -0,0 +1,4 @@
// +abcd

let patch_text = "@@ -0,0 +1,4 @@\n+abcd\n";
patches = dmp.patch_fromText(patch_text);

let result = dmp.patch_apply(patches, "");
console.log(result);
// [ 'abcd', [ true ] ]
```


## Configure

After creating a DMP object, you can tweak a few attributes. Don't mess with these unless you know what you're doing!


```js
dmp.Patch_DeleteThreshold = 0.375;
dmp.Match_Threshold = 0.375;
dmp.Match_Distance = 100;
```

Default values are:

```js
Patch_DeleteThreshold = 0.5;
Match_Threshold = 0.5;
Match_Distance = 1000;
```
