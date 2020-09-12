import { makeStyles } from '@material-ui/core/styles';
export const AccountPageStyles =  makeStyles(theme => ({
    header: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 65,
        padding: '0 30px',  
    },
    appHeading: {
        paddingTop:20,
        paddingLeft:20,
        textShadow:10,
        fontWeight:200,
        fontSize: 20,
        lineHeight: 1.5,
        letterSpacing: 0.32,
        fontFamily: 'Anton',
        [theme.breakpoints.down('sm')]: {
            fontWeight:200,
            fontSize: 20,
            lineHeight: 1.5,
            paddingLeft:10,
            letterSpacing: 0.28,
          },
          [theme.breakpoints.down('xs')]: {
            fontWeight:200,
            fontSize: 17,
            lineHeight: 1.2,
            paddingLeft:5,
            letterSpacing: 0.28,
          },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius:10,
        padding:theme.spacing(3),
        boxShadow: '0 3px 5px 2px rgba(0, 15, 135, .3)',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      },
      toggle_buttton: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      }
    }))