import MarkdownIt from 'markdown-it';
const markdownItClient = new MarkdownIt();

export const renderMarkdown = ({ content, options }) => {
	let returnValue = '';
	// if no options were defined
	if (!options || Object.keys(options).length < 1) {
		returnValue = markdownItClient.render(content);
	}
	if (options.removeEndTags) {
		const baseRender = markdownItClient.render(content);
		const beginningIndex = baseRender.indexOf('>') + 1;
		const endIndex = baseRender.lastIndexOf('<');
		returnValue = baseRender.slice(beginningIndex, endIndex);
	}
	return returnValue;
};
