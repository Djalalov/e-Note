import React from "react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";

const LightAndDark = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";
	return (
		<ActionIcon
			size="lg"
			variant="outline"
			color={dark ? "yellow" : "blue"}
			onClick={() => toggleColorScheme()}
			title="Toggle color scheme"
		>
			{dark ? <Sun size={25} /> : <MoonStars size={25} />}
		</ActionIcon>
	);
};

export default LightAndDark;
