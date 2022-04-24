import React, { useState } from "react";
import { useForm } from "@mantine/form";
import ImageDragzone from "./ImageDragzone";

import {
	TextInput,
	Button,
	Group,
	Box,
	Text,
	useMantineTheme,
	MantineTheme,
} from "@mantine/core";

const Form = () => {
	const theme = useMantineTheme();

	const [postData, setPostData] = useState({});

	const form = useForm({
		initialValues: {
			author: "",
			title: "",
			description: "",
			tag: "",
			selectedFile: "",
			email: "",
		},

		validate: {
			author: value => (value.length < 2 ? "Too short name" : null),
			title: value => (value.length < 2 ? "Too short title" : null),
			description: value => (value.length < 20 ? "Too short title" : null),
			tag: value => (value.length < 2 ? "Too short title" : null),
			email: value => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
		},
	});

	const handleSubmit = () => {
		setPostData(form.values);
		console.log(postData);
	};

	const secondaryColor =
		theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[8];

	return (
		<Box sx={{ minWidth: 260 }} shadow="xs" p="5" radius="md">
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<Text
					style={{ color: secondaryColor, marginTop: 10 }}
					align="center"
					size="lg"
					weight={600}
				>
					Create Notes
				</Text>

				<TextInput
					value={postData.author}
					required
					label="Name"
					placeholder="Your name ..."
					{...form.getInputProps("author")}
				/>
				<TextInput
					value={postData.title}
					style={{ marginTop: 15 }}
					required
					label="Title"
					placeholder="Title of your note..."
					{...form.getInputProps("title")}
				/>

				<TextInput
					value={postData.description}
					style={{ marginTop: 15 }}
					required
					label="Description"
					placeholder="Description ..."
					{...form.getInputProps("description")}
				/>
				<TextInput
					value={postData.email}
					style={{ marginTop: 15 }}
					required
					label="Email"
					placeholder="your@email.com"
					{...form.getInputProps("email")}
				/>

				<TextInput
					style={{ marginTop: 15 }}
					value={postData.tag}
					required
					label="Tag"
					placeholder="Tag"
					{...form.getInputProps("tag")}
				/>

				<ImageDragzone {...form.getInputProps("selectedFile")} />

				<Group mt="md">
					<Button type="submit">Submit</Button>
				</Group>
			</form>
		</Box>
	);
};

export default Form;
