import { createGlobalStyle } from 'styled-components';
import { style } from '@jbkr/style-service';

// ${style.type.family()};

export const GlobalStyle = createGlobalStyle`
	body {
		${style.type.family()};

		&.ReactModal__Body--open {
			overflow: hidden;
			&.hide-intercom #intercom-container {
				display: none;
			}
		}

		.ReactModalPortal > div {
			opacity: 0;
		}

		.ReactModalPortal .ReactModal__Overlay {
			transition: all 200ms ease-in;

			&--after-open {
				opacity: 1;
			}
			&--before-close {
				opacity: 0;
			}
		}
	}
`;
/* hr {
	border: none;
	border-top: 1px solid ${color.border};
	clear: both;
	margin-bottom: 1.25rem;
}
code,
pre {
	font-family: ${typography.type.code};
	font-size: ${typography.size.s2 - 1}px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

code {
	display: inline-block;
	padding-left: 2px;
	padding-right: 2px;
	vertical-align: baseline;

	color: ${color.secondary};
}

pre {
	line-height: 18px;
	padding: 11px 1rem;
	white-space: pre-wrap;

	background: rgba(0, 0, 0, 0.05);
	color: ${color.darkest};
	border-radius: 3px;
	margin: 1rem 0;
} */
