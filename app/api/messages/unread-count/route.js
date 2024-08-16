import connectDB from '@/config/database';
import Message from '@/models/Model';
import { getSessionUser } from '@/utils/getSessionUser';

export const dynamic = 'force-dynamic';

// GET /api/messages/unread-count
export const GET = async (request, { params }) => {
	try {
		await connectDB();
		const sessionUser = await getSessionUser();
		if (!sessionUser || !sessionUser.userId) {
			return new Response('User ID is required', { status: 401 });
		}
		const { userId } = sessionUser;

		const unreadMessageCount = await Message.countDocuments({
			recipient: userId,
			read: false,
		});
		// if (!unreadMessageCount) return new Response('Message Not Found', { status: 404 });

		return new Response(JSON.stringify(unreadMessageCount), {
			status: 200,
		});
	} catch (error) {
		console.log(error);
		return new Response('Something went wrong', { status: 500 });
	}
};
