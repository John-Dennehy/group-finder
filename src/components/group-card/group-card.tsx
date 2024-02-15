import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BaseGroup, groupsTable } from "@/db/schema";
import { cn } from "@/lib/className";
import { Weekday } from "@/lib/date-time";
import { Badge } from "../ui/badge";
import { AttendeeTypesList } from "./attendee-types-list";

type GroupCardProps = {
  group: BaseGroup;
};

export type AttendeeType = {
  name: string;
  description?: string;
};

const defaultAttendeeTypes: AttendeeType[] = [
  {
    name: "Parent",
    description: "For parents with children under 5 years old",
  },
  {
    name: "Toddlers",
    description: "Children aged 1 to 5 years old",
  },
];

export function GroupCard({ group }: GroupCardProps) {
  // TODO: Data not yet available

  const attendeeTypes = defaultAttendeeTypes;

  return (
    <Card>
      <CardHeader>
        <h3 className="flex flex-row gap-2 justify-between text-xl">
          {group.name}
          <span className="text-gray-500 text-sm">
            {"Active: "}
            {group.active && <span className="text-green-500 text-xl">✓</span>}
            {!group.active && <span className=" text-xl">✗</span>}
          </span>
        </h3>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <p>{group.description}</p>
        <AttendeeTypesList attendeeTypes={attendeeTypes} />
        {/* <GroupSchedule schedule={group.schedule} /> */}
      </CardContent>

      <CardFooter>
        <p className="italic text-sm font-light text-gray-500 text-right w-full">
          id: {group.id}
        </p>
      </CardFooter>
    </Card>
  );
}

function GroupSchedule({ schedule }) {
  const mondayData = schedule.filter((item) => item.weekday === "Mon");
  const tuesdayData = schedule.filter((item) => item.weekday === "Tue");
  const wednesdayData = schedule.filter((item) => item.weekday === "Wed");
  const thursdayData = schedule.filter((item) => item.weekday === "Thu");
  const fridayData = schedule.filter((item) => item.weekday === "Fri");
  const saturdayData = schedule.filter((item) => item.weekday === "Sat");
  const sundayData = schedule.filter((item) => item.weekday === "Sun");

  return (
    <div>
      <ul className="flex flex-wrap gap-2">
        <WeekdaySchedule weekday="Mon" data={mondayData} />
        <WeekdaySchedule weekday="Tue" data={tuesdayData} />
        <WeekdaySchedule weekday="Wed" data={wednesdayData} />
        <WeekdaySchedule weekday="Thu" data={thursdayData} />
        <WeekdaySchedule weekday="Fri" data={fridayData} />
        <WeekdaySchedule weekday="Sat" data={saturdayData} />
        <WeekdaySchedule weekday="Sun" data={sundayData} />
      </ul>
    </div>
  );
}

type WeekdayScheduleProps = {
  weekday: Weekday;
  data: WeekdayScheduleData[];
};

type WeekdayScheduleData = {
  weekday: string;
  id: string;
  startTime: string;
  endTime: string;
  description: string;
  active: boolean;
};

function WeekdaySchedule({ weekday, data }: WeekdayScheduleProps) {
  if (data.length === 0) return null;

  return (
    <li className="flex flex-col">
      <h3 className="text-sm font-semibold">{weekday}</h3>
      <ul>
        {data.map((item) => (
          <li
            key={item.id}
            className={cn(
              "flex flex-row gap-2",
              item.active ? "" : "text-gray-500",
            )}
          >
            <p className="whitespace-nowrap text-sm">
              {`${item.startTime} to ${item.endTime}`}
            </p>
            <Badge variant="outline" className="text-xs whitespace-nowrap">
              {item.description}
            </Badge>
          </li>
        ))}
      </ul>
    </li>
  );
}

