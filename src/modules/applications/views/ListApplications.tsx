import { Link } from '~/common';
import { Add as AddIcon } from '@mui/icons-material';
import EmptySpace from '~/common/components/EmtySpace';
import { Fab } from './styles';

export default function ListApplications(): JSX.Element {
  return (
    <div>
      <EmptySpace />
      <Link to={'/app/apps/registry'}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
}
