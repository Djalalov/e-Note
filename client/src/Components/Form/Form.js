import React, { useState } from "react";
import { useForm } from "@mantine/form";
import ImageDragzone from "./ImageDragzone";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
import {
	TextInput,
	Button,
	Group,
	Box,
	Text,
	useMantineTheme,
} from "@mantine/core";

const Form = () => {
	const theme = useMantineTheme();

	const [image, setImage] = useState("");
	const [postData, setPostData] = useState({});

	const dispatch = useDispatch();

	const form = useForm({
		initialValues: {
			author: "",
			title: "",
			description: "",
			tag: "",
			img: "",
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
		if (image) {
			form.setFieldValue("img", image);
		}
		console.log(form.values);

		setPostData(form.values);
		console.log(postData);

		/* if (postData) {
			dispatch(createPost(postData));
			form.reset();
			setImage("");
		} */
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
					required
					label="Name"
					placeholder="Your name ..."
					{...form.getInputProps("author")}
				/>
				<TextInput
					style={{ marginTop: 15 }}
					required
					label="Title"
					placeholder="Title of your note..."
					{...form.getInputProps("title")}
				/>

				<TextInput
					style={{ marginTop: 15 }}
					required
					label="Description"
					placeholder="Description ..."
					{...form.getInputProps("description")}
				/>
				<TextInput
					style={{ marginTop: 15 }}
					required
					label="Email"
					placeholder="your@email.com"
					{...form.getInputProps("email")}
				/>

				<TextInput
					style={{ marginTop: 15 }}
					required
					label="Tag"
					placeholder="Tag"
					{...form.getInputProps("tag")}
				/>

				<ImageDragzone image={image} setImage={setImage} />

				<Group mt="md">
					<Button
						//	onClick={handleSubmit}
						radius="lg"
						fullWidth
						variant="gradient"
						type="submit"
					>
						Submit
					</Button>
				</Group>
			</form>
		</Box>
	);
};

export default Form;
