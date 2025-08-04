import { ChevronsUpDown, Users } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useWorkspace } from "@/contexts/workspace-provider";
import { ModuleWorkspaces } from "./module-workspaces";

export function NavWorkspace() {
  const { activeOrganization } = useWorkspace();

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href={`/${activeOrganization?.id}`}
                className="flex items-center gap-2"
              >
                <Users className="size-4" />
                <span>{activeOrganization?.name}</span>
                <Badge variant="outline">Pro Plan</Badge>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {/* {showSite && (
						<>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>
									{isLoadingSites ? "Loading..." : activeProject?.name}
								</BreadcrumbPage>
							</BreadcrumbItem>
						</>
					)} */}
        </BreadcrumbList>
      </Breadcrumb>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <ChevronsUpDown className="size-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="rounded-lg p-0 min-w-max"
          side="bottom"
          align="start"
          sideOffset={4}
        >
          <ModuleWorkspaces />
        </PopoverContent>
      </Popover>
    </>
  );
}
