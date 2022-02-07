import { IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RepositorySource } from '~/types/RepositorySource';
import { useServerManager } from '~/common/axios';
import PageTitle from '~/common/components/PageTitle';
import { Add as AddIcon } from '@mui/icons-material';
import { appStore, Link } from '~/common';
import { StyledPaper } from './styles';
import { RepoType } from '~/types/RepoType';
import { useLocation } from 'react-router-dom';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import GridLoadingOverlay from '~/common/components/Grid/LoadingOverlay';
import GridNoRowsOverlay from '~/common/components/Grid/NoRowsOverlay';

export default function ListRepositorySource(): JSX.Element {
  const [repositorySources, setRepositorySources] = useState<
    RepositorySource[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { search } = useLocation();
  const [t] = useTranslation();
  const serverManager = useServerManager();

  useEffect(() => {
    setIsLoading(true);
    serverManager
      .getRepositorySource()
      .then((r) => {
        setRepositorySources(r.data);
        setIsLoading(false);
      })
      .catch(() => setRepositorySources([]));
  }, [search, appStore.organization?.id]);

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 2,
      editable: false,
      disableColumnMenu: true,
    },
    {
      field: 'url',
      headerName: 'URL',
      flex: 4,
      editable: false,
      disableColumnMenu: true,
    },
    {
      field: 'type',
      headerName: 'Type',
      flex: 4,
      renderCell: (params: GridRenderCellParams) => {
        return RepoType[params.row.type];
      },
    },
  ];

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
        <DataGrid
          rows={repositorySources}
          columns={columns}
          //rowsPerPageOptions={[5, 10, 20]}
          paginationMode={'client'}
          pageSize={10}
          pagination
          loading={isLoading}
          autoHeight
          autoPageSize
          disableSelectionOnClick
          components={{
            LoadingOverlay: GridLoadingOverlay,
            NoRowsOverlay: GridNoRowsOverlay,
          }}
          filterMode={'client'}
        />
      </StyledPaper>
    </>
  );
}
