const syntaxColors = require('./colors');


module.exports = `
	code[class*="language-"],
	pre[class*="language-"] {
		color: ${syntaxColors.Neutral[1]};
		background: ${syntaxColors.Neutral[4]};
		text-shadow: 0 1px rgba(0, 0, 0, 0.3);
		font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
		font-size: 1em;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;
		line-height: 1.5;

		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;

		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
	}

	pre[class*="language-"] {
		padding: 1em;
		margin: .5em 0;
		overflow: auto;
		border-radius: 0.3em;
	}

	:not(pre) > code[class*="language-"],
	pre[class*="language-"] {
		background: ${syntaxColors.Neutral[4]};
	}




	/* Inline code */
	:not(pre) > code[class*="language-"] {
		padding: .1em;
		border-radius: .3em;
		white-space: normal;
	}

	.token.comment,
	.token.prolog,
	.token.doctype,
	.token.cdata {
		color: ${syntaxColors.Neutral[1]};
	}

	.token.punctuation {
		color: ${syntaxColors.Neutral[1]};
	}

	.token.namespace {
		opacity: .7;
	}

	.token.property,
	.token.tag,
	.token.constant,
	.token.symbol,
	.token.deleted {
		color: ${syntaxColors.Accent.Flamingo};
	}

	.token.boolean,
	.token.number {
		color: ${syntaxColors.Accent.Iris};
	}

	.token.selector,
	.token.attr-name,
	.token.string,
	.token.char,
	.token.builtin,
	.token.inserted {
		color: ${syntaxColors.Accent.Kiwi};
	}

	.token.operator,
	.token.entity,
	.token.url,
	.language-css .token.string,
	.style .token.string,
	.token.variable {
		color: ${syntaxColors.Neutral[1]};
	}

	.token.atrule,
	.token.attr-value,
	.token.function,
	.token.class-name {
		color: ${syntaxColors.Accent.Sunshine};
	}

	.token.keyword {
		color: ${syntaxColors.Accent.Spruce};
	}

	.token.regex,
	.token.important {
		color: ${syntaxColors.Accent.Tiger};
	}

	.token.important,
	.token.bold {
		font-weight: bold;
	}
	.token.italic {
		font-style: italic;
	}

	.token.entity {
		cursor: help;
	}
`;
