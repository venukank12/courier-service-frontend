import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

type PageHeroContainerProps = {
  heading: string;
  badge?: ReactNode;
  description?: any;
  children?: any;
};

const PageHeroContainer = ({
  heading,
  badge,
  description,
  children,
}: PageHeroContainerProps) => (
  <Box
    width="100%"
    display="flex"
    flexWrap="wrap"
    alignItems="flex-end"
    gap={1}
    mt={3}
  >
    <Box display="flex" flexDirection="column" flexGrow={1}>
      <Box display="flex" gap={1}>
        <Typography
          fontSize={{ xs: "20px", sm: "22px", md: "26px" }}
          fontWeight={500}
          mb={1}
        >
          {heading}
        </Typography>
        {badge}
      </Box>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </Box>
    <Box display="flex" alignItems="flex-end" gap={1}>
      {children}
    </Box>
  </Box>
);

export default PageHeroContainer;