import React, { useState } from "react";

import {
	AppShell,
	Navbar,
	Header,
	Footer,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
} from "@mantine/core";
import Cards from "../Cards";
import LightAndDark from "../LightAndDark";
import Form from "../Form/Form";

const Appshell = () => {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);

	const secondaryColor =
		theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[8];

	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === "dark"
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			fixed
			/*========== Navbar========= */
			navbar={
				<Navbar
					p="md"
					hiddenBreakpoint="sm"
					hidden={!opened}
					width={{ sm: 200, lg: 300 }}
				>
					<Form />
				</Navbar>
			}
			/*========== Footer========= */
			footer={
				<Footer height={60} p="md">
					<Text style={{ color: secondaryColor }} size="lg" weight={700}>
						Footer
					</Text>
				</Footer>
			}
			/*========== Header========= */
			header={
				<Header height={70} p="md">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							height: "100%",
						}}
					>
						<MediaQuery largerThan="sm" styles={{ display: "none" }}>
							<Burger
								opened={opened}
								onClick={() => setOpened(o => !o)}
								size="sm"
								color={theme.colors.gray[6]}
								mr="xl"
							/>
						</MediaQuery>

						<Text
							size="xl"
							transform="uppercase"
							weight={700}
							style={{ color: secondaryColor }}
						>
							E-note
						</Text>
						<LightAndDark />
					</div>
				</Header>
			}
		>
			<Cards />
		</AppShell>
	);
};

export default Appshell;
