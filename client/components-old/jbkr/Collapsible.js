
// ----- IMPORTS

import * as React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';
import CollapsibleSectionButton from './sb/SBMedia.Button/SBMedia.CollapsibleSectionButton.Pres.www';
import FadeIn from './sb/SBMedia.FadeIn/SBMedia.FadeIn.Pres.www';

// ----- COMPONENT

export default class Collapsible extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: true,
		};
		this.handleCollapsibleClick = this.handleCollapsibleClick.bind(this);
	}
	handleCollapsibleClick() {
		this.setState(prevState => ({
			collapsed: !prevState.collapsed,
		}));
	}
	render() {

		return (
			<div>
				{
					this.props.buttonPosition === "before" && 

					<CollapsibleSectionButton
						buttonHeight="3"
						iconPosition="before"
						iconContent={this.state.collapsed ? "angle-down" : "angle-up"}
						contentHeight="1.8"
						text={this.state.collapsed ? this.props.expandText : this.props.collapseText}
						defaultBackgroundColor="transparent"
						defaultContentColor={StylePatterns.Color('interactive-on-dark-default')}
						activeBackgroundColor="transparent"
						activeContentColor={StylePatterns.Color('interactive-on-dark-active')}
						clickHandler={this.handleCollapsibleClick}
					/>
				}
				<FadeIn
					in={!this.state.collapsed}
				>
					{this.props.children}
				</FadeIn>
				{
					this.props.buttonPosition === "after" &&

					<CollapsibleSectionButton
						buttonHeight="3"
						iconPosition="before"
						iconContent={this.state.collapsed ? "angle-down" : "angle-up"}
						contentHeight="1.8"
						text={this.state.collapsed ? this.props.expandText : this.props.collapseText}
						defaultBackgroundColor="transparent"
						defaultContentColor={StylePatterns.Color('interactive-on-dark-default')}
						activeBackgroundColor="transparent"
						activeContentColor={StylePatterns.Color('interactive-on-dark-active')}
						clickHandler={this.handleCollapsibleClick}
					/>
				}
			</div>
		);
	}
}
