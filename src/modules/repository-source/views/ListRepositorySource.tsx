import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RepositorySource } from '~/types/RepositorySource';
import { useServerManager } from '~/common/axios';

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{t('repositorySource.url')}</TableCell>
            <TableCell align="right">{t('repositorySource.token')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repositorySources.map((repositorySource) => (
            <TableRow
              key={repositorySource.url}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {repositorySource.token}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
