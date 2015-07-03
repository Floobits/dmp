"use strict";

// Require
const DMP = require("./lib/dmp");
// Create DMP object
const dmp = new DMP();

// Configure
dmp.Patch_DeleteThreshold = 0.375;
dmp.Match_Threshold = 0.375;
dmp.Match_Distance = 100;

let patches = dmp.patch_make("", "abcd");

console.log(dmp.patch_toText(patches));
// @@ -0,0 +1,4 @@
// +abcd

let patch_text = "@@ -0,0 +1,4 @@\n+abcd\n";
patches = dmp.patch_fromText(patch_text);

let result = dmp.patch_apply(patches, "");
console.log(result);
// [ 'abcd', [ true ] ]
