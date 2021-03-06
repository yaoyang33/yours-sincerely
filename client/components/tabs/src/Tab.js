import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    textTransform: 'initial',
    fontSize: '0.75rem',
    minHeight: 40,
  },
};

export default withStyles(styles)(Tab);
