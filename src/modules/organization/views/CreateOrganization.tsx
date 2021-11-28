import {
  VerticalBox,
  HorizontalBox,
  TextField,
  VerticalLogoBox,
  Button,
  RootContainer,
  HeadTypografy,
  LogoPaper,
} from './styles';
import { Avatar, Box, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface organizationData {
  name: string;
  description?: string;
}

export default function CreateOrganization(): JSX.Element {
  const [t] = useTranslation();
  const [organizationData, setOrganizationData] = useState<organizationData>({
    name: '',
  });

  const handleChangeData =
    (prop: keyof organizationData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setOrganizationData({ ...organizationData, [prop]: event.target.value });
    };

  return (
    <RootContainer>
      <Box>
        <HeadTypografy variant="h4">{t('organization.head')}</HeadTypografy>
        <HorizontalBox>
          <VerticalBox>
            <TextField
              fullWidth
              label={t('organization.name')}
              value={organizationData.name}
              required
              onChange={handleChangeData('name')}
            />
            <TextField
              fullWidth
              label={t('organization.description')}
              multiline
              maxRows={5}
              value={organizationData.description}
              onChange={handleChangeData('description')}
            />
            <Button
              variant={'contained'}
              disabled={organizationData.name == ''}
            >
              {t('organization.create')}
            </Button>
          </VerticalBox>
          <VerticalLogoBox>
            <LogoPaper elevation={2}>
              <Avatar sx={{ width: 126, height: 126 }} />
            </LogoPaper>
          </VerticalLogoBox>
        </HorizontalBox>
      </Box>
    </RootContainer>
  );
}
