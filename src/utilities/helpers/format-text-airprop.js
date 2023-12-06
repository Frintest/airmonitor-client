import React from "react";
export const formatText = (text) => {
	const subBeginIndex = text.indexOf("<sub>");
	const supBeginIndex = text.indexOf("<sup>");
	let mainText = text,
		indexTag = "";
	if (subBeginIndex !== -1) {
		mainText = text.slice(0, subBeginIndex);
		indexTag = <sub>{text.slice(subBeginIndex + 5)}</sub>;
	} else if (supBeginIndex !== -1) {
		mainText = text.slice(0, supBeginIndex);
		indexTag = <sup>{text.slice(supBeginIndex + 5)}</sup>;
	}

	return [mainText, indexTag];
};
