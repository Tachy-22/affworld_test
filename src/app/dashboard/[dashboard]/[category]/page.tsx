import WorkSpace from "@/components/dashboard/WorkSpace";

const page = async ({
  params,
}: {
  params: { dashboard: string; category: string };
}) => {
  return <WorkSpace params={params} />;
};

export default page;
