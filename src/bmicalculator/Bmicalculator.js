import React, { Component } from "react";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    backgroundColor: '#bbb'
  },
  each: {
    width: '25%',
    height: '60px',
    fontSize: '35px',
    backgroundColor: 'blue',
    color: 'white'
  },
  eachac: {
    width: '25%',
    height: '60px',
    fontSize: '35px',
    backgroundColor: 'pink',
    color: 'black'
  },
  eacheq: {
    width: '25%',
    height: '60px',
    fontSize: '35px',
    backgroundColor: 'pink',
    color: 'black'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize:"25px"
  },
  textbox: {
    height: '60px',
    backgroundColor: '#bbb',
    width: '100%',
    fontSize:'25px',
    textAlign : 'right'
  },
  text: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    lineHeight:'5px'
  },
});


const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

class Bmicalculator extends Component {
  state = {
    height:'',
    weight:'',
    error:false
  }
 calculate=()=>{
   if(this.state.weight==="" || this.state.height===""){
this.setState({
  error:true
})
   }
   else{
    this.setState({
      error:false
    })   
  var result=Math.round((this.state.weight)/((this.state.height/100)*(this.state.height/100))).toFixed(2);
  var co="";var res=0;
  if(result<18.5){
     co=result+"\n You are Underweight";
     res=1;
  }
     else if(result>=18.5 && result<24.9)
{
  co=result+"\n You are Normal";
  res=2;
}
  else if(result>=25.0 && result<29.9)
 {    co=result+"\n You are Overweight";
 res=3;
} 
 else if(result>=30)
 {    co=result+"\n You are very Overweight";
 res=4;
} 
 if(res===1 || res===3 || res===4){
     Swal.fire({
       icon:"warning",
      title:co
     })
    }
    else if(res===2){
      Swal.fire({
        icon:"success",
       title:co
      })
    }
  }
}

parameter=(e)=>{
  this.setState({
    [e.target.id]: e.target.value
  });
}
// password=(e)=>{
//   this.setState({
//     pass: e.target.value
//   });
// }
  render() {
    const { classes } = this.props;

    return (
      <div md={12} xs={12}>
        <div className={classes.root}>
          <AppBar position="fixed" color="secondary">
            <Toolbar>
              <Typography className={classes.title}>
                BMI CALCULATOR
                            </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ padding: "20px" }}>
          <Grid container>
            <Grid item md={3} />
            <Grid item md={6} xs={12}>
              <Card style={{
                margin: "auto",
                boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.3)",
                "&:hover": {
                  boxShadow: "0 16px 30px 12.125px rgba(0,0,0,0.3)"
                },
                backgroundColor:"rgba(255, 255, 255, 1.0)"
              }}>
                <CardContent>
                  <div style={{paddingTop:"5px"}}></div>
                <Grid container spacing={3} >
                <Grid item md={3} />
                      <Grid item md={6} xs={12}>
                <TextField
                          className={classes.text} type="number" id="weight" value={this.state.weight} onChange={e => this.parameter(e)} label="Weight (kg)" />
                  </Grid>
                  </Grid>
                  <Grid item md={3} />
                  <Grid container spacing={3} >
                <Grid item md={3} />
                      <Grid item md={6} xs={12}>
                <TextField
                          className={classes.text} type="number" id="height" value={this.state.height} onChange={e => this.parameter(e)} label="Height (cms)" />
                  </Grid>
                  </Grid>
                  <Grid item md={3} />
                  { this.state.error===true ?
                    <div style={{justifyContent:"center",display:"flex",alignItems:"center", paddingTop:'20px'}}><FormHelperText style={{color:'red',fontSize:"15px"}}>Enter the details</FormHelperText>
                       </div>:
                       null
                    } 
                    <br />
                  <Grid container spacing={3} >
                <Grid item md={4} xs={3} />
                      <Grid item md={4} xs={6}>
                  <BootstrapButton variant="contained" color="primary" fullWidth disableRipple
                                className={classes.margin}
                                onClick={()=>this.calculate()}
                                >
                                Calculate
                              </BootstrapButton>
                              </Grid>
                  </Grid>
                  <Grid item md={4} xs={3} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Bmicalculator);
