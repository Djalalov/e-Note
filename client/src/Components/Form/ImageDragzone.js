import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, useMantineTheme, Input, Text } from "@mantine/core";

const ImageDragzone = () => {
	const onDrop = useCallback(acceptedFiles => {
		console.log(acceptedFiles);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	let theme = useMantineTheme();

	const secondaryColor =
		theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[8];

	return (
		<Box
			style={{ marginTop: 20, height: 100, border: "2px dotted gray" }}
			sx={theme => ({
				backgroundColor:
					theme.colorScheme === "dark"
						? theme.colors.dark[6]
						: theme.colors.gray[0],
				textAlign: "center",
				padding: theme.spacing.xl,
				borderRadius: theme.radius.md,
				cursor: "pointer",
				marginTop: theme.spacing.xl,

				"&:hover": {
					backgroundColor:
						theme.colorScheme === "dark"
							? theme.colors.dark[4]
							: theme.colors.gray[1],
				},
			})}
			{...getRootProps()}
		>
			<Input {...getInputProps()} />
			{isDragActive ? (
				<Text style={{ color: secondaryColor, marginTop: 20 }}>
					Drop the files here ...
				</Text>
			) : (
				<Text style={{ color: secondaryColor, marginTop: 20 }}>
					Drag 'n' drop some files here, or click to select files
				</Text>
			)}
		</Box>
	);
};

export default ImageDragzone;
