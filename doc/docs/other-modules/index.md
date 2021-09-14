---
id: "index"
title: "Other Modules"
sidebar_label: "Intro"
sidebar_position: 0
---

This is some great content.

## About the Lambda functions

1. AWS Lambda does not support ESM syntax, even on the Node.js 14.x runtime.
1. The Unified markdown transformation ecosystem plugins can only be used in
	ESM syntax. Requiring, as opposed to importing, isn't possible.
1. I'm using `serverless-bundle` to package the Lambda functions and transpile
	them from ESM to CJS. However, this makes debugging the actual deployment
	artifact very painful.
--
1. A lot of the Lambda code is repetitive, violating the principle of keeping
	it DRY. I created a function that contained this repetitive code and it
	performed beautifully in the VS Code debugger. However, the transpiled
	deployment artifact didn't work on AWS and the only info I could get was a
	`502 Bad Gateway` response with a payload of
	`{ "message": "Internal server error" }`.
1. Faced with the choice of writing repetitive ESM code, days of painful debugging
	of the transpiled deployment artifacts, or reverting to an older, less
	supported and reliable markdown transformation plugin ecosystem that would
	be CJS-friendly, I opted to write repetitive ESM code.
