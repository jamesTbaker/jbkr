import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock
} from '@jbkr/style-service';


const SkillsStatementsList = styled.ul`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		margin: 0;
		padding: 0;
	}
`;
const SkillsStatementsListItemContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;

const SkillsStatementsListItem = styled.li`
	list-style-type: none;
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
export const ProfileSkillsStatementsListLargeDevice = ({ skills }) => {


};
