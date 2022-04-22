import React from "react";
import {
	Grid,
	Card,
	Image,
	Text,
	Badge,
	Button,
	Group,
	useMantineTheme,
} from "@mantine/core";

import Posts from "../Components/Posts/Posts";
import Form from "../Components/Form/Form";

const Cards = () => {
	const theme = useMantineTheme();

	const secondaryColor =
		theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
	return (
		<Grid>
			<Grid.Col style={{ maxWidth: 350 }} span={3} sm={4} xs={4}>
				<Card shadow="sm" p="lg" radius="lg">
					<Card.Section>
						<Image
							src="https://cdn.pixabay.com/photo/2022/04/16/16/42/black-shouldered-kite-7136585_960_720.jpg"
							height={300}
							alt="Norway"
						/>
					</Card.Section>

					<Group
						position="apart"
						style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
					>
						<Text weight={500}>Norway Fjord Adventures</Text>
						<Badge color="pink" variant="light">
							On Sale
						</Badge>
					</Group>

					<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
						With Fjord Tours you can explore more of the magical fjord
						landscapes with tours and activities on and around the fjords of
						Norway
					</Text>

					<Button
						variant="light"
						color="blue"
						fullWidth
						style={{ marginTop: 14 }}
					>
						Book classic tour now
					</Button>
				</Card>
			</Grid.Col>
			{/* *******/}
			<Grid.Col style={{ maxWidth: 350 }} span={4} sm={4} xs={4}>
				<Card shadow="sm" p="lg" radius="lg">
					<Card.Section>
						<Image
							src="https://cdn.pixabay.com/photo/2022/04/12/18/00/europe-7128531_960_720.jpg"
							height={300}
							alt="Norway"
						/>
					</Card.Section>

					<Group
						position="apart"
						style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
					>
						<Text weight={500}>Norway Fjord Adventures</Text>
						<Badge color="pink" variant="light">
							On Sale
						</Badge>
					</Group>

					<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
						With Fjord Tours you can explore more of the magical fjord
						landscapes with tours and activities on and around the fjords of
						Norway
					</Text>

					<Button
						variant="light"
						color="blue"
						fullWidth
						style={{ marginTop: 14 }}
					>
						Book classic tour now
					</Button>
				</Card>
			</Grid.Col>

			<Grid.Col style={{ maxWidth: 350 }} span={4} sm={4} xs={4}>
				<Card shadow="sm" p="lg" radius="lg">
					<Card.Section>
						<Image
							src="https://cdn.pixabay.com/photo/2022/04/18/16/16/ship-7140939_960_720.jpg"
							height={300}
							alt="Norway"
						/>
					</Card.Section>

					<Group
						position="apart"
						style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
					>
						<Text weight={500}>Norway Fjord Adventures</Text>
						<Badge color="pink" variant="light">
							On Sale
						</Badge>
					</Group>

					<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
						With Fjord Tours you can explore more of the magical fjord
						landscapes with tours and activities on and around the fjords of
						Norway
					</Text>

					<Button
						variant="light"
						color="blue"
						fullWidth
						style={{ marginTop: 14 }}
					>
						Book classic tour now
					</Button>
				</Card>
			</Grid.Col>

			<Grid.Col style={{ maxWidth: 350 }} span={4} sm={4} xs={4}>
				<Card shadow="sm" p="lg" radius="lg">
					<Card.Section>
						<Image
							src="https://cdn.pixabay.com/photo/2022/04/12/18/00/europe-7128531_960_720.jpg"
							height={300}
							alt="Norway"
						/>
					</Card.Section>

					<Group
						position="apart"
						style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
					>
						<Text weight={500}>Norway Fjord Adventures</Text>
						<Badge color="pink" variant="light">
							On Sale
						</Badge>
					</Group>

					<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
						With Fjord Tours you can explore more of the magical fjord
						landscapes with tours and activities on and around the fjords of
						Norway
					</Text>

					<Button
						variant="light"
						color="blue"
						fullWidth
						style={{ marginTop: 14 }}
					>
						Book classic tour now
					</Button>
				</Card>
			</Grid.Col>

			<Posts />
		</Grid>
	);
};

export default Cards;
