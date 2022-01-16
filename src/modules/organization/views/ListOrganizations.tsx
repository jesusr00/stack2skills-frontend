import EmptySpace from '~/common/components/EmtySpace';
import { Add as AddIcon } from '@mui/icons-material';
import { Fab } from './styles';
import { Link } from 'react-router-dom';

export default function ListOrganizations(): JSX.Element {
  return (
    <div>
      <EmptySpace />
      <Link to={'/app/organization/create'}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
}
