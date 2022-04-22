import React, { useState, useEffect } from "react";
import "./app.css";
import Appshell from "./Components/Layout/Appshell";
import { useHotkeys } from "@mantine/hooks";
import { useDispatch } from "react-redux";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

import { getPosts } from "./actions/posts";

const App = () => {
	const dispatch = useDispatch();

	const [colorScheme, setColorScheme] = useState("light");
	const toggleColorScheme = value =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	useHotkeys([["mod+J", () => toggleColorScheme()]]);

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

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
