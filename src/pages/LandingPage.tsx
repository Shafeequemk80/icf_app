import { Flex, Heading, Text, Separator, Card } from "@radix-ui/themes";
import LoginPage from "./LoginPage";

function LandingPage() {
  return (
    <Flex align="center" justify="center" className="min-h-screen px-4 ">
      <Card size="5"  className="w-full max-w-md    shadow-lg">
        {/* Brand */}
        <Flex direction="column" align="center" gap="5">
          <img src="/logomain.png" alt="ICF Logo" className="w-32 h-auto" />

          <Heading size="5" align="center">
            Sign in
          </Heading>

          <Text size="2"  color="gray" align="center">
            Access the ICF International Portal
          </Text>
        </Flex>

        <Separator size="4" className="mt-4" />

        {/* Login form */}
  <Flex direction="column" className="mt-4">
        <LoginPage />
        </Flex>

        {/* Footer */}
   <Flex direction="column" align="center" gap="2" mt="4">
             <Text size="1" color="gray" align="center">
          © {new Date().getFullYear()} ICF International. All rights reserved.
        </Text>
        </Flex>
      </Card>
    </Flex>
  );
}

export default LandingPage;
