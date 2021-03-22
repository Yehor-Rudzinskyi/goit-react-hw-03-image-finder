import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  app: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '16px',
    paddingBottom: '24px',
  },
});

const Section = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.app}>{children}</div>;
};

export default Section;
