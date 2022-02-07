import { IconButton } from '@mui/material';
import { Add as AddIcon, Edit as EditIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import PageTitle from '~/common/components/PageTitle';
import { appStore, Link } from '~/common';
import { StyledPaper } from './styles';
import ProjectData from '~/types/ProjectData';
import { useState, useEffect } from 'react';
import { useServerManager } from '~/common/axios';
import { useLocation } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import GridLoadingOverlay from '~/common/components/Grid/LoadingOverlay';
import GridNoRowsOverlay from '~/common/components/Grid/NoRowsOverlay';

function ProjectList(): JSX.Element {
  const [t] = useTranslation();
  const serverManager = useServerManager();
  const { search } = useLocation();

  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    serverManager.getProject().then((r) => {
      setProjects(r.data);
      setIsLoading(false);
    });
  }, [appStore.organization?.id, search]);

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
      headerName: '',
      renderCell: () => (
        <IconButton>
          <EditIcon />
        </IconButton>
      ),
      disableColumnMenu: true,
      disableReorder: true,
      editable: false,
    },
  ];

  return (
    <>
      <PageTitle title={t('projects.projects')} disableMarginBottom>
        <Link to={'/app/projects/create'}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Link>
      </PageTitle>
      <StyledPaper>
        <DataGrid
          rows={projects}
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

export default ProjectList;
