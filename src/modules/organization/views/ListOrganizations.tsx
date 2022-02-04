import { Add as AddIcon, Edit as EditIcon } from '@mui/icons-material';
import { Paper } from './styles';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from '~/common';
import GridLoadingOverlay from '~/common/components/Grid/LoadingOverlay';
import GridNoRowsOverlay from '~/common/components/Grid/NoRowsOverlay';
import { useState, useEffect } from 'react';
import { useServerManager } from '~/common/axios';
import { IconButton } from '@mui/material';
import PageTitle from '~/common/components/PageTitle';
import { useTranslation } from 'react-i18next';

export default function ListOrganizations(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [rows, setRows] = useState([]);
  const [t] = useTranslation();

  const serverManager = useServerManager();

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 4,
      editable: false,
      disableColumnMenu: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 4,
      editable: false,
      disableColumnMenu: true,
    },
    {
      field: 'id',
      headerName: 'Edit',
      renderCell: () => (
        <IconButton>
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  useEffect(() => {
    serverManager
      .getOrganizatios()
      .then((r) => setRows(r.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <PageTitle title={t('organization.organizations')} disableMarginBottom>
        <Link to={'/app/organization/create'}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Link>
      </PageTitle>
      <Paper>
        <DataGrid
          rows={rows}
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
      </Paper>
    </div>
  );
}
