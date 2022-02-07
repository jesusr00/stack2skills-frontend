import { appStore, Link } from '~/common';
import { Add as AddIcon } from '@mui/icons-material';
import PageTitle from '~/common/components/PageTitle';
import { useTranslation } from 'react-i18next';
import {
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { StyledPaper, TableContainer } from './styles';
import { useState, useEffect } from 'react';
import Application from '~/types/Application';
import { useServerManager } from '~/common/axios';
import Splash from '~/common/components/Splash';

interface Org {
  id: string;
  name: string;
  applications: Application[];
}

export default function ListApplications(): JSX.Element {
  const [t] = useTranslation();
  const serverManager = useServerManager();
  const [applications, setApplications] = useState<Org[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    serverManager.getApplication().then((r) => {
      setApplications(r.data);
      setIsLoading(false);
    });
  }, [appStore.organization]);

  return (
    <div>
      <PageTitle disableMarginBottom title={t('applications.app')}>
        <Link to={'/app/apps/registry'}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Link>
      </PageTitle>

      {isLoading ? (
        <Splash />
      ) : (
        applications.map(
          (app) =>
            app.applications.length > 0 && (
              <StyledPaper key={app.id}>
                <TableContainer>
                  <Typography>{app.name}</Typography>
                  <Table aria-label="collapsible table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Framework</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {app.applications.map((application) => (
                        <TableRow key={application.id}>
                          <TableCell>{application.name}</TableCell>
                          <TableCell>{application.description}</TableCell>
                          <TableCell>{application.framework}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </StyledPaper>
            ),
        )
      )}
    </div>
  );
}
