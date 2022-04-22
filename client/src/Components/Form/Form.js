import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { At } from "tabler-icons-react";
import { TextInput, Button, Text, Group, Box } from "@mantine/core";

const Form = () => {
	const [value, setValue] = useState("");
	const [postData, setPostData] = useState({});

	const form = useForm({
		initialValues: {
			author: "",
			title: "",
			description: "",
			tag: "",
			selectedFile: "",
		},

		validate: {
			email: value => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
		},
	});

	return (
		<Box sx={{ maxWidth: 500 }} mx="auto" shadow="xs" p="md" radius="md">
			<form onSubmit={form.onSubmit(values => console.log(values))}>
				<Text size="large">Create Notes</Text>

				<TextInput
					//value={postData.author}
					onChange={e => setValue(e.currentTarget.value)}
					required
					lebel="Name"
					placeholder="Your name ..."
					{...form.getInputProps("author")}
				/>

				<TextInput
					//value={postData.email}
					onChange={e => setValue(e.currentTarget.value)}
					required
					label="Email"
					placeholder="your@email.com"
					rightSection={<At size={14} />}
					{...form.getInputProps("email")}
				/>

				<Group mt="md">
					<Button type="submit">Submit</Button>
				</Group>
			</form>
		</Box>
	);
};

export default Form;
