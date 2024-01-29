import { Badge } from "../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { AttendeeType } from "./group-card";

type AttendeeTypesListProps = {
  attendeeTypes: AttendeeType[];
};

export function AttendeeTypesList({ attendeeTypes }: AttendeeTypesListProps) {
  return (
    <TooltipProvider>
      <ul className="flex flex-row flex-wrap gap-2">
        {attendeeTypes.map((type) => (
          <li key={type.name}>
            <Tooltip>
              <TooltipTrigger>
                <Badge>{type.name}</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>{type.description}</p>
              </TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </TooltipProvider>
  );
}
