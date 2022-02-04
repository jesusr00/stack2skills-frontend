import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  TableContainer,
  Paper,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RepositorySource } from '~/types/RepositorySource';
import { useServerManager } from '~/common/axios';
import PageTitle from '~/common/components/PageTitle';
import { Add as AddIcon } from '@mui/icons-material';
import { Link } from '~/common';
import { StyledPaper } from './styles';
import { RepoType } from '~/types/RepoType';

export default function ListRepositorySource(): JSX.Element {
  const [repositorySources, setRepositorySources] = useState<
    RepositorySource[]
  >([]);

  const [t] = useTranslation();
  const serverManager = useServerManager();

  useEffect(() => {
    serverManager
      .getRepositorySource()
      .then((r) => setRepositorySources(r.data));
  }, []);

  return (
    <>
      <PageTitle
        title={t('repositorySource.repository-source')}
        disableMarginBottom={false}
      >
        <Link to={'/app/repository-source/create'}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Link>
      </PageTitle>
      <StyledPaper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{t('repositorySource.name')}</TableCell>
                <TableCell>{t('repositorySource.url')}</TableCell>
                <TableCell>{t('repositorySource.type')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {repositorySources.map((repositorySource) => (
                <TableRow
                  key={repositorySource.url}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {repositorySource.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {repositorySource.url}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {RepoType[repositorySource.type as unknown as number]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
    </>
  );
}
