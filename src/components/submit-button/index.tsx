import { styled } from '@mui/material/styles';
import { IconButton, IconButtonProps } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

type SubmitButtonProps = IconButtonProps;

const SubmitIconButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: theme.palette.common.white,
  borderRadius: 0,
  border: `1px solid ${theme.palette.error.main}`,
  '&:hover': {
    backgroundColor: theme.palette.error.light,
    border: `1px solid ${theme.palette.error.dark}`,
  },
}));

export const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <SubmitIconButton {...props}>
      <ChevronRight sx={{ fontSize: 44 }} data-testid={'submit-icon'} />
    </SubmitIconButton>
  );
};
