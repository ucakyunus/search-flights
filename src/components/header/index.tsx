import styled from '@emotion/styled';
import { Box, Typography, TypographyProps } from '@mui/material';

export interface HeaderProps {
  bgColor?: 'dark' | 'light';
}

export const Header = ({ bgColor }: HeaderProps) => {
  const dynamicColor = bgColor === 'dark' ? 'white' : 'black';

  const StyledBoldTypography = styled(Typography)(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    color: dynamicColor,
  }));

  const StyledTypography = styled(Typography)<TypographyProps>(() => ({
    fontSize: '1rem',
    fontWeight: '300',
    color: dynamicColor,
  }));

  return (
    <Box
      mt={2}
      mx={2}
      height={16}
      display='flex'
      color='white'
      borderBottom={1}
      alignItems='center'
      borderColor={dynamicColor}
      justifyContent='space-between'
    >
      <StyledBoldTypography>turkishairlines.com</StyledBoldTypography>
      <Box component='span' display='flex'>
        <StyledTypography>search</StyledTypography>
        <StyledBoldTypography>Flight Challange</StyledBoldTypography>
      </Box>
    </Box>
  );
};
