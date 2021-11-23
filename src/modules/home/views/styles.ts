import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  rootContainer: {
    display: 'flex',
    padding: '0 3em 2em 6em',
    overflowX: 'hidden',
  },
  textContainer: {
    paddingTop: '8em',
  },
  svgImage: {
    marginTop: 20,
    marginRight: -150,
    height: 530,
  },
  buttonContainer: {
    display: 'flex',
    margin: '30px 30px 30px 0',
    maxWidth: '80%',
  },
  startButton: {
    width: '16em',
  },
}));

export default useStyles;
