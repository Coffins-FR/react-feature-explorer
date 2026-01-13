import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/src/features/shared/components/ui/card";
import useFetch from "@/src/features/shared/hooks/useFetch/useFetch";
import type { DynamicForm } from "@/src/features/dynamicform/type";

const DynamicForm = () => {
  const { data, error, loading } = useFetch<DynamicForm>(
    "/mock/dynamicform/onboardingform.json"
  );

  return (
    <div className="mx-auto max-w-[1024px] pt-16">
      <Card className="px-4">
        <CardHeader className="text-2xl">{data?.title}</CardHeader>
        <CardDescription className="pl-6">{data?.description}</CardDescription>
        <CardContent>
          {loading && <p>Loading form...</p>}
          {error && <p className="text-red-500">Error loading form: {error}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default DynamicForm;
