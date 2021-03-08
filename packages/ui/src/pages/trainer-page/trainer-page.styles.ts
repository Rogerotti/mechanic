import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  column1: {
    float: 'left',
    width: '25%',
    padding: '10px',
    height: '100%',
  },
  column2: {
    float: 'left',
    width: '50%',
    padding: '10px',
    height: '100%',
  },
  image: {
    height: 150,
    borderRadius: 90,
    position: 'relative',
    top: -75,
    justifySelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginTop: -35,
  },
  description: {
    lineHeight: 2,
  },
  test: {
    '&&': {
      width: '100%',
    },
  },
  comments: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderTopColor: 'red',
    // borderLeftColor: 'red',
    overflow: 'hidden',
    // boxShadow: '5px 5px 5px black',
    // boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    //  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    // boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
  },
}));
