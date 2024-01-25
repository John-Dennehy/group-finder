export type Group = {
  id: number;
  name: string;
  active: boolean;
};

type GroupListProps = {
  groups: Group[];
};

export function GroupList({ groups }: GroupListProps) {
  return (
    <div>
      <h2>Group List</h2>
      {/* if list is empty, display a short message instead of a list  */}
      {groups.length === 0 && <p>No groups found</p>}
      {/* if list is not empty, display a list of groups */}
      {groups.length > 0 && (
        <ul>
          {groups.map((group) => (
            <li key={group.id}>
              <h3>{group.name}</h3>
              {group.active ? <span>✅</span> : <span>❌</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GroupList;
