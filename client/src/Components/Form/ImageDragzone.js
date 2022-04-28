import React, { useCallback, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { useDropzone } from "react-dropzone";
import {
	Box,
	useMantineTheme,
	Input,
	Text,
	Group,
	Loader,
	Image,
} from "@mantine/core";
import { Upload, Photo } from "tabler-icons-react";

const ImageDragzone = ({ image, setImage }) => {
	const [loading, setLoading] = useState(false);

	const onDrop = useCallback(acceptedFile => {
		setLoading(true);
		setTimeout(() => {
			//changing the png/jpeg to base64 string
			acceptedFile.forEach(file => {
				const reader = new FileReader();

				reader.onload = () => {
					const image = reader.result;
					setImage(prevImage => [...prevImage, image]);
					console.log(image);
				};

				reader.readAsDataURL(file);
				//image = file;
			});

			setLoading(false);
		}, 2000);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		multiple: false,
		accept: "image/*",
	});

	let theme = useMantineTheme();

	const secondaryColor =
		theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[8];

	const largeScreen = useMediaQuery("(min-width: 1200px)");

	return (
		<Box
			style={{ marginTop: 20, height: 125, border: "2px dotted gray" }}
			sx={theme => ({
				backgroundColor:
					theme.colorScheme === "dark"
						? theme.colors.dark[6]
						: theme.colors.gray[0],
				textAlign: "center",
				padding: theme.spacing.xl,
				borderRadius: theme.radius.lg,
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
						Drag 'n' drop your photo here, or click to select.
					</Text>
				</Group>
			) : image ? (
				<Image
					styles={{
						image: {
							transform: "translateX(-22px) translateY(-22px)",
						},
					}}
					src={image}
					alt=""
					radius="lg"
					//fit="contain"
					width={largeScreen ? 360 : 260}
					height={170}
				/>
			) : loading ? (
				<Loader style={{ marginTop: 35 }} variant="bars" />
			) : (
				<Group position="center" direction="row" noWrap={true}>
					<Photo size="50" style={{ color: secondaryColor }} />
					<Text style={{ color: secondaryColor, marginTop: 30 }}>
						Drag 'n' drop your photo here, or click to select.
					</Text>
				</Group>
			)}
		</Box>
	);
};

export default ImageDragzone;
