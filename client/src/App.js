import React, { useState } from "react";
import "./app.css";
import Appshell from "./Components/Layout/Appshell";
import { useHotkeys } from "@mantine/hooks";

import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from "@mantine/core";
import LightAndDark from "./Components/LightAndDark";

const App = () => {
	const [colorScheme, setColorScheme] = useState("light");
	const toggleColorScheme = value =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	useHotkeys([["mod+J", () => toggleColorScheme()]]);

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider theme={{ colorScheme }}>
				<Appshell />
			</MantineProvider>
		</ColorSchemeProvider>
	);
};

export default App;
