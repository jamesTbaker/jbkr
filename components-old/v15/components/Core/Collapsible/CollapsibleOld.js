import React from 'react';
import { v4 as uuid } from 'uuid';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import styled, { css } from 'styled-components';
import Style from '../../../services/styles';

const accordionItemID = uuid();

const CollapsibleContainer = styled.div`
	.accordion__button {
		line-height: 3.75rem;
		background-color: ${Style.Color({ token: 'grey-5' })};
		cursor: pointer;
		padding: 2.5rem;
		width: 100%;
		text-align: left;
		border: none;
		transition: all .5s;
	}
	.accordion__button:hover {
		color: rgb(166, 0, 99);
		background-color: #fff;
	}
	.accordion__button:before {
		display: inline-block;
		position: relative;
		left: -3px;
		content: '';
		height: 10px;
		width: 10px;
		margin-right: 16px;
		border-bottom: 2px solid #007298;
		border-right: 2px solid #007298;
		transform: rotate(-45deg);
		transition: transform .25s ease;
	}
	.accordion__button[aria-expanded='true']::before,
	.accordion__button[aria-selected='true']::before {
		transform: rotate(45deg);
		top: -3px;
		left: 2px;
	}
	.accordion__panel {
		padding: 20px;
	}
	${(props) => props.expanding && !props.collapsed && `
		.accordion__panel {
			animation: fadein 0.35s ease-in;
		}
		@keyframes fadein {
			0% {
				opacity: 0.1;
			}
			100% {
				opacity: 1;
			}
		}
	`}
	${(props) => !props.collapsed && `
		background-color: rgb(0, 47, 86);
		color: #fff;

		.accordion__button {
			background-color: transparent;
			color: #fff;

			&:hover {
				color: rgb(242, 234, 154);
				background-color: transparent;
			}
			&::before {
				padding-top: 0;
				border-bottom: 2px solid rgb(105, 179, 231);
				border-right: 2px solid rgb(105, 179, 231);
			}
		}
		.accordion__panel {
			padding-top: 0;
		}
	`}
	${(props) => props.overlay && props.overlay.screenWidths.includes(props.device.screen.width) && `
		.accordion__panel {
			position: absolute;
			width: ${props.overlay.bodyWidth}px;
			height: ${props.overlay.bodyHeight}px;
			background-color: ${Style.Color({ token: 'bold-blue' })};
			z-index: 1000;
		}
	`}
`;

const Collapsible = ({
	device,
	header,
	collapsed,
	expanding,
	handler,
	overlay,
	children,
}) => (
	<CollapsibleContainer
		device={device}
		collapsed={collapsed}
		expanding={expanding}
		overlay={overlay}
	>
		<Accordion
			allowZeroExpanded
			preExpanded={collapsed ? [] : [accordionItemID]}
			onChange={handler}
		>
			<AccordionItem
				uuid={accordionItemID}
			>
				<AccordionItemHeading
					aria-level={header.level}
				>
					<AccordionItemButton>
						{header.text}
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel
					className={expanding ? 'accordion__panel accordion__panel__expanding' : 'accordion__panel'}
				>
					{children}
				</AccordionItemPanel>
			</AccordionItem>
		</Accordion>
	</CollapsibleContainer>
);

export default Collapsible;
