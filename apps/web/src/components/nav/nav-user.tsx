"use client";

import { CreditCard, LayoutDashboard, LogOut, User } from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTeams } from "@/contexts/teams-provider";
import { ThemeToggle } from "../theme-toggle";

export function NavUser({
	user,
}: {
	user: {
		name: string;
		email: string;
		avatar: string;
		plan?: string;
		id?: string;
	};
}) {
	const { currentTeamId, currentTeam } = useTeams();

	const billingHref = `/${currentTeamId}/billing`;
	const dashboardHref = currentTeamId ? `/${currentTeamId}` : "/";

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar className="h-8 w-8 rounded-lg">
					<AvatarImage src={user.avatar} alt={user.name} />
					<AvatarFallback className="rounded-lg">
						{user.name?.[0]?.toUpperCase()}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
				side="bottom"
				align="end"
				sideOffset={4}
			>
				<DropdownMenuLabel className="p-0 font-normal">
					<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
						<Avatar className="h-8 w-8 rounded-lg">
							<AvatarImage src={user.avatar} alt={user.name} />
							<AvatarFallback className="rounded-lg">CN</AvatarFallback>
						</Avatar>
						<div className="grid flex-1 text-left text-sm leading-tight">
							<span className="truncate font-medium">{user.name}</span>
							<span className="truncate text-xs">{user.email}</span>
						</div>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuLabel className="flex justify-center">
						<ThemeToggle />
					</DropdownMenuLabel>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link href={dashboardHref}>
							<LayoutDashboard className="mr-2 h-4 w-4" />
							Dashboard
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href={`/user/${user.id || "profile"}`}>
							<User className="mr-2 h-4 w-4" />
							My Workspaces
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href={billingHref}>
							<CreditCard className="mr-2 h-4 w-4" />
							Billing for {currentTeam?.name}
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
					<LogOut className="mr-2 h-4 w-4" />
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
