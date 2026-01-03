import { Box, Flex, Heading, Text, Separator } from "@radix-ui/themes";
import LoginPage from "./LoginPage";

function LandingPage() {
  return (
    <Flex
      
      align="center"
      justify="center"
      className="min-h-screen px-4 "
    >
      <Box className="w-full max-w-md border border-gray-200 rounded-lg p-6 bg-white shadow-lg">
        <Flex direction="column" gap="6">
          
          {/* Brand */}
          <Flex direction="column" align="center" gap="3">
            <img
              src="/logomain.png"
              alt="ICF Logo"
              className="w-32 h-auto"
            />

            <Heading size="5" align="center">
              Sign in
            </Heading>

            <Text size="2" color="gray" align="center">
              Access the ICF International Portal
            </Text>
          </Flex>

          <Separator size="4" />

          {/* Login form */}
          <LoginPage />

          {/* Footer */}
          <Text size="1" color="gray" align="center">
            © {new Date().getFullYear()} ICF International. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default LandingPage;
