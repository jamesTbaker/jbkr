import { Scaffold } from '../Layout/Scaffold';
import { MainContent } from '../Layout/MainContent';

export const FourOhFourScreen = ({
	meta,
	header,
	main,
	footer,
}) => (
	<Scaffold
		meta={meta}
		header={header}
		footer={footer}
	>
		<MainContent>
			<h1>{main.title}</h1>
		</MainContent>
	</Scaffold>
);
