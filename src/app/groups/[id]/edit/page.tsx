type GroupEditPageProps = {
  params: { id: string };
};

export default function GroupEditPage({ params }: GroupEditPageProps) {
  return (
    <>
      <h1>Edit Group {params.id}</h1>
    </>
  );
}
