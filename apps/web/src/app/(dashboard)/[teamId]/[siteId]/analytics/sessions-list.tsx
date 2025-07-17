import { format } from "date-fns";
import { getRecentSessions } from "@/actions/session-actions";

interface SessionsListProps {
	siteId: string;
	limit?: number;
}

export default async function SessionsList({
	siteId,
	limit = 5,
}: SessionsListProps) {
	const sessions = await getRecentSessions(siteId, limit);

	return (
		<ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
			{sessions.map((session) => (
				<li key={session.id} style={{ marginBottom: 24 }}>
					<div>
						<strong>Session:</strong>{" "}
						{format(new Date(session.startedAt), "yyyy-MM-dd HH:mm:ss")}
						<br />
						<strong>ID:</strong> {session.sessionId}
					</div>
					<ul style={{ marginLeft: 24 }}>
						{session.pageViewEvents.map((pv, idx) => (
							<li key={pv.id}>
								{idx === 0 ? "Entry page: " : "Next page: "}
								<span>{pv.url}</span>
								<span style={{ color: "#888", marginLeft: 8, fontSize: 12 }}>
									({format(new Date(pv.timestamp), "HH:mm:ss")})
								</span>
							</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	);
}
