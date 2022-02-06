import {
  IconButton,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import PageTitle from '~/common/components/PageTitle';
import { appStore, Link } from '~/common';
import { StyledPaper } from './styles';
import ProjectData from '~/types/ProjectData';
import { useState, useEffect } from 'react';
import { useServerManager } from '~/common/axios';
import Splash from '~/common/components/Splash';
import { useLocation } from 'react-router-dom';

function ProjectList(): JSX.Element {
  const [t] = useTranslation();
  const serverManager = useServerManager();
  const { search } = useLocation();

  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [isLoadig, setIsLoadig] = useState<boolean>(false);

  useEffect(() => {
    setIsLoadig(true);
    serverManager
      .getProject()
      .then((r) => {
        setProjects(r.data);
      })
      .finally(() => setIsLoadig(false));
  }, [appStore.organization?.id, search]);

  return (
    <>
      <PageTitle title={t('projects.projects')} disableMarginBottom>
        <Link to={'/app/projects/create'}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Link>
      </PageTitle>
      {isLoadig ? (
        <Splash />
      ) : (
        <StyledPaper>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>{t('projects.name')}</TableCell>
                  <TableCell>{t('projects.description')}</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {projects.map((project: ProjectData) => (
                  <TableRow
                    key={project.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {project.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {project.description}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledPaper>
      )}
    </>
  );
}

export default ProjectList;
