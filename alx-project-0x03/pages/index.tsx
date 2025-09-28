import { useRouter } from "next/router";
import Button from "@/components/common/Button";
import { PageRouteProps } from "@/interface";

export default function Home() {
  const router = useRouter(); // ✅ Required useRouter instance

  // Imperative routing with useRouter
  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
      {/* Welcome Message */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Splash App!
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Your one-stop platform for everything AI you need. Start exploring by
        navigating to our features below.
      </p>

      {/* Navigation Options */}
      <div className="flex gap-6">
        <Button
          label="Generate Text"
          color="blue"
          size="md"
          onClick={() => routeToNextPage({ pageRoute: "/generate-text-ai" })}
        />
        <Button
          label="Text to Image"
          color="green"
          size="md"
          onClick={() => routeToNextPage({ pageRoute: "/text-to-image" })}
        />
        <Button
          label="Contact Us"
          color="orange"
          size="md"
          onClick={() => routeToNextPage({ pageRoute: "/counter-app" })}
        />
      </div>
    </div>
  );
}
