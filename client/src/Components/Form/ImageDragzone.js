import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, useMantineTheme, Input, Text, Group } from "@mantine/core";
import { Upload, Photo, X, Icon as TablerIcon } from "tabler-icons-react";

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
				<Group position="center" direction="row" noWrap={true}>
					<Upload size="50" style={{ color: secondaryColor }} />

					<Text style={{ color: secondaryColor, marginTop: 30 }}>
						Drag 'n' drop your file here, or click to select a file
					</Text>
				</Group>
			) : (
				<Group position="center" direction="row" noWrap={true}>
					<Photo size="50" style={{ color: secondaryColor }} />
					<Text style={{ color: secondaryColor, marginTop: 30 }}>
						Drag 'n' drop your file here, or click to select a file
					</Text>
				</Group>
			)}
		</Box>
	);
};

export default ImageDragzone;
