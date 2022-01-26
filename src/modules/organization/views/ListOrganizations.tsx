import { Add as AddIcon } from '@mui/icons-material';
import { Fab, Paper } from './styles';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import GridLoadingOverlay from '~/common/components/Grid/LoadingOverlay';
import GridNoRowsOverlay from '~/common/components/Grid/NoRowsOverlay';
import { useState, useEffect } from 'react';
import { useServerManager } from '~/common/axios';

export default function ListOrganizations(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [rows, setRows] = useState([]);

  const serverManager = useServerManager();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.4, disableColumnMenu: true },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
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
  ];

  useEffect(() => {
    serverManager
      .getOrganizatios()
      .then((r) => setRows(r.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
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
      <Link to={'/app/organization/create'}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
}
