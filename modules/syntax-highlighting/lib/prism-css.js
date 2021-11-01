const syntaxColors = require('./colors');


module.exports = `
	code[class*="language-"],
	pre[class*="language-"],
	div.os-host.os-host-foreign.os-theme-dark code[class*="language-"],
	div.os-host.os-host-foreign.os-theme-dark pre[class*="language-"] {
		font-family: 'Roboto Mono', monospace;
		color: ${syntaxColors.Neutral[1]};
		background: ${syntaxColors.Neutral[5]};
		text-shadow: 0 1px rgba(0, 0, 0, 0.3);
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

	pre[class*="language-"],
	div.os-host.os-host-foreign.os-theme-dark pre[class*="language-"] {
		font-family: 'Roboto Mono', monospace;
		padding: 1em;
		margin: .5em 0;
		overflow: auto;
		border-radius: 0.3em;
	}

	:not(pre) > code[class*="language-"],
	pre[class*="language-"],
	div.os-host.os-host-foreign.os-theme-dark :not(pre) > code[class*="language-"],
	div.os-host.os-host-foreign.os-theme-dark pre[class*="language-"] {
		font-family: 'Roboto Mono', monospace;
		background: ${syntaxColors.Neutral[5]};
	}

	:not(pre) > code,
	.sbdocs :not(pre) > code {
		font-family: 'Roboto Mono', monospace;
		font-size: 80%;
		padding: .125rem .25rem;
		color: ${syntaxColors.Accent.Spruce};
		border: 2px solid ${syntaxColors.Neutral[4]};
		background-color: ${syntaxColors.Neutral[5]};
		border-radius: 3px;
		vertical-align: middle;
	}



	:not(pre) > code[class*="language-"],
	div.os-host.os-host-foreign.os-theme-dark :not(pre) > code[class*="language-"] {
		font-family: 'Roboto Mono', monospace;
		padding: .1em;
		border-radius: .3em;
		white-space: normal;
	}

	.token,
	div.os-host.os-host-foreign.os-theme-dark .token {
		font-family: 'Roboto Mono', monospace;
	}

	.token.comment,
	.token.prolog,
	.token.doctype,
	.token.cdata,
	div.os-host.os-host-foreign.os-theme-dark .token.comment,
	div.os-host.os-host-foreign.os-theme-dark .token.prolog,
	div.os-host.os-host-foreign.os-theme-dark .token.doctype,
	div.os-host.os-host-foreign.os-theme-dark .token.cdata {
		font-family: 'Roboto Mono', monospace;
		color: ${syntaxColors.Neutral[1]};
	}

	.token.punctuation,
	div.os-host.os-host-foreign.os-theme-dark .token.punctuation {
		font-family: 'Roboto Mono', monospace;
		color: ${syntaxColors.Neutral[1]};
	}

	.token.namespace,
	div.os-host.os-host-foreign.os-theme-dark .token.namespace {
		font-family: 'Roboto Mono', monospace;
		opacity: .7;
	}

	.token.property,
	.token.tag,
	.token.constant,
	.token.symbol,
	.token.deleted,
	div.os-host.os-host-foreign.os-theme-dark .token.property,
	div.os-host.os-host-foreign.os-theme-dark .token.tag,
	div.os-host.os-host-foreign.os-theme-dark .token.constant,
	div.os-host.os-host-foreign.os-theme-dark .token.symbol,
	div.os-host.os-host-foreign.os-theme-dark .token.deleted {
		font-family: 'Roboto Mono', monospace;
		color: ${syntaxColors.Accent.Flamingo};
	}

	.token.boolean,
	.token.number,
	div.os-host.os-host-foreign.os-theme-dark .token.boolean,
	div.os-host.os-host-foreign.os-theme-dark .token.number {
		font-family: 'Roboto Mono', monospace;
		color: ${syntaxColors.Accent.Iris};
	}

	.token.selector,
	.token.attr-name,
	.token.string,
	.token.char,
	.token.builtin,
	.token.inserted,
	div.os-host.os-host-foreign.os-theme-dark .token.selector,
	div.os-host.os-host-foreign.os-theme-dark .token.attr-name,
	div.os-host.os-host-foreign.os-theme-dark .token.string,
	div.os-host.os-host-foreign.os-theme-dark .token.char,
	div.os-host.os-host-foreign.os-theme-dark .token.builtin,
	div.os-host.os-host-foreign.os-theme-dark .token.inserted {
		font-family: 'Roboto Mono', monospace;
		color: ${syntaxColors.Accent.Kiwi};
	}

	.token.operator,
	.token.entity,
	.token.url,
	.language-css .token.string,
	.style .token.string,
	.token.variable,
	div.os-host.os-host-foreign.os-theme-dark .token.operator,
	div.os-host.os-host-foreign.os-theme-dark .token.entity,
	div.os-host.os-host-foreign.os-theme-dark .token.url,
	div.os-host.os-host-foreign.os-theme-dark .language-css .token.string,
	div.os-host.os-host-foreign.os-theme-dark .style .token.string,
	div.os-host.os-host-foreign.os-theme-dark .token.variable {
		font-family: 'Roboto Mono', monospace;
		color: ${syntaxColors.Neutral[1]};
	}

	.token.atrule,
	.token.attr-value,
	.token.function,
	.token.class-name,
	div.os-host.os-host-foreign.os-theme-dark .token.atrule,
	div.os-host.os-host-foreign.os-theme-dark .token.attr-value,
	div.os-host.os-host-foreign.os-theme-dark .token.function,
	div.os-host.os-host-foreign.os-theme-dark .token.class-name {
		font-family: 'Roboto Mono', monospace;
		color: ${syntaxColors.Accent.Sunshine};
	}

	.token.keyword,
	div.os-host.os-host-foreign.os-theme-dark .token.keyword {
		font-family: 'Roboto Mono', monospace;
		color: ${syntaxColors.Accent.Spruce};
	}

	.token.regex,
	.token.important,
	div.os-host.os-host-foreign.os-theme-dark .token.regex,
	div.os-host.os-host-foreign.os-theme-dark .token.important {
		font-family: 'Roboto Mono', monospace;
		color: ${syntaxColors.Accent.Tiger};
	}

	.token.important,
	.token.bold,
	div.os-host.os-host-foreign.os-theme-dark .token.important,
	div.os-host.os-host-foreign.os-theme-dark .token.bold {
		font-family: 'Roboto Mono', monospace;
		font-weight: bold;
	}
	.token.italic,
	div.os-host.os-host-foreign.os-theme-dark .token.italic {
		font-family: 'Roboto Mono', monospace;
		font-style: italic;
	}

	.token.entity,
	div.os-host.os-host-foreign.os-theme-dark .token.entity {
		font-family: 'Roboto Mono', monospace;
		cursor: help;
	}
`;
