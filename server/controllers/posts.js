import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
	try {
		const postMessages = await PostMessage.find();

		res.status(200).json(postMessages);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createPosts = async (req, res) => {
	const post = req.body;

	const newpost = new PostMessage(post);
	try {
		await newpost.save();
		res.status(201).json(newpost);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
