import { Flex, Grid, Section, Text } from "@radix-ui/themes";

import LoginPage from "./LoginPage";

function LandingPage() {
  return (
    <Section>
      <Grid columns={{ initial: "1", md: "3" }} gap="6">
        {/* 75% Section */}
        <Flex
          direction="column"
          gap="4"
          style={{ gridColumn: "span 3" }}
          className="md:ps-20 p-5 flex w-screen  flex-col"
        >
          <div className="flex justify-center md:justify-start mb-10">
            <img
              src="/logomain.png"
              alt="Logo"
              className="w-32 md:w-56  h-auto"
            />
          </div>
          <LoginPage />
          <div className="absolute bottom-5 left-5 md:top-10 md:left-137.5">
            <img
              src="/mapshape.png"
              alt="Logo"
              className="w-32 md:w-100 h-auto"
            />
          </div>
        </Flex>

        {/* 25% Section */}
        <Flex>
          <Text weight="bold" className="text-2xl md:text-4xl lg:text-4xl">
            Sign In to <br />
            ICF International Portal
          </Text>
        </Flex>
      </Grid>
    </Section>
  );
}

export default LandingPage;
  