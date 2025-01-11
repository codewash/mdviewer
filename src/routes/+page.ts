import type { PageLoad } from './$types';
export interface MDfileData {
	title: string;
	path: string;
	date: string;
	id?: number;
	size?: number;
	component?: any;
}

export interface MDModule {
	metadata: {
		title: string;
		date: string;
	};
	default: any;
}

export const load: PageLoad = async ({ params, route }) => {
	const mdFileData: MDfileData[] = [];
	const mdFiles = import.meta.glob('./*.md', { eager: true });
	//save to local storage?

	for (const path in mdFiles) {
		const module = mdFiles[path] as MDModule;
		mdFileData.push({
			title: module.metadata.title,
			path,
			date: module.metadata.date.split('T')[0],
			size: new Blob([module.default]).size,
			component: module.default
		});
	}

	return {
		mdFileData
	};

	console.log(JSON.stringify(mdFileData, null, 2));
};
