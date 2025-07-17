import { getIoServer } from "@/lib/socketio-server";

export async function GET() {
	const io = getIoServer();

	if (!io) {
		return new Response("Socket.IO server not initialized", { status: 500 });
	}

	// This is a placeholder - Socket.IO should be handled by the custom server
	// But this route helps with the 404 errors
	return new Response("Socket.IO server is running", { status: 200 });
}

export async function POST() {
	return GET();
}
