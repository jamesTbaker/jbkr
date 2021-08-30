import { syntaxColors } from './colors';


module.exports = {
	'plain': {
		'color': syntaxColors.Neutral[1],
		'backgroundColor': syntaxColors.Neutral[4],
	},
	'styles': [{
		'types': ['changed'],
		'style': {
			'color': syntaxColors.Accent.Finch,
			'fontStyle': 'italic',
		},
	}, {
		'types': ['deleted'],
		'style': {
			'color': syntaxColors.Accent.Flamingo,
			'fontStyle': 'italic',
		},
	}, {
		'types': ['inserted'],
		'style': {
			'color': syntaxColors.Accent.Peacock,
			'fontStyle': 'italic',
		},
	}, {
		'types': ['comment'],
		'style': {
			'color': syntaxColors.Neutral[3],
			'fontStyle': 'italic',
		},
	}, {
		'types': ['string', 'url'],
		'style': {
			'color': syntaxColors.Accent.Peacock,
		},
	}, {
		'types': ['variable'],
		'style': {
			'color': syntaxColors.Neutral[1],
		},
	}, {
		'types': ['number'],
		'style': {
			'color': syntaxColors.Accent.Iris,
		},
	}, {
		'types': ['builtin', 'char', 'constant', 'function', 'class-name'],
		'style': {
			'color': syntaxColors.Accent.Sunshine,
		},
	}, {
		'types': ['punctuation'],
		'style': {
			'color': syntaxColors.Neutral[1],
		},
	}, {
		'types': ['selector', 'doctype'],
		'style': {
			'color': syntaxColors.Accent.Peacock,
			'fontStyle': 'italic',
		},
	}, {
		'types': ['tag', 'operator', 'keyword'],
		'style': {
			'color': syntaxColors.Accent.Spruce,
		},
	}, {
		'types': ['boolean'],
		'style': {
			'color': syntaxColors.Accent.Iris,
		},
	}, {
		'types': ['namespace'],
		'style': {
			'color': syntaxColors.Neutral[2],
			'opacity': 0.7,
		},
	}, {
		'types': ['tag', 'property'],
		'style': {
			'color': '#f92672',
		},
	}, {
		'types': ['attr-name'],
		'style': {
			'color': '${syntaxColors.Accent.Peacock} !important',
		},
	}, {
		'types': ['doctype'],
		'style': {
			'color': syntaxColors.Neutral[3],
		},
	}, {
		'types': ['rule'],
		'style': {
			'color': syntaxColors.Accent.Sunshine,
		},
	}],
};
