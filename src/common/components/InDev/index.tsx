import { Box } from './styles';
import { Typography } from '@mui/material';
import { Engineering as EngineeringIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export default function InDev(): JSX.Element {
  const [t] = useTranslation();
  return (
    <Box>
      <EngineeringIcon color="primary" sx={{ fontSize: 120 }} />
      <Typography variant="h5" color="primary" align="center">
        {t('common.inDev')}
      </Typography>
    </Box>
  );
}
