import { GroupSelect } from "@/server/db/schema/groups_schema";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { AttendeeTypesList } from "./attendee-types-list";

type GroupCardProps = {
  group: GroupSelect;
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
  const currentAddress =
    "Staines Congregational Church Hall, Stainash Crescent, Staines TW18 1AY";

  const contactDetails = {
    facebook: "https://www.facebook.com/NCTSAE",
    instagram: "https://www.instagram.com/nct_staines_ashford_egham/",
    twitter: "https://twitter.com/NCT_SAE",
    facebookGroup: "https://www.facebook.com/groups/1234567890",
    website:
      "https://www.nct.org.uk/local-activities-meet-ups/region-south-east-england/staines-ashford-egham-surrounding-areas",
    email: "stainesashfordegham@nct.org.uk",
    phone: "01234 567890",
  };

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

      <CardContent>
        <p>{group.description}</p>
        <AttendeeTypesList attendeeTypes={attendeeTypes} />
      </CardContent>

      <CardFooter>
        <p className="italic text-sm font-light text-gray-500 text-right w-full">
          id: {group.id}
        </p>
      </CardFooter>
    </Card>
  );
}
