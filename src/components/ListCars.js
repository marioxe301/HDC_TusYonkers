import React, { Component } from "react";
import {withStyles, Button,GridList,ListItem,ListItemAvatar,ListItemText,Avatar, Paper, TextField, Dialog} from "@material-ui/core";
import { connect } from "react-redux";
import NavBar from "./NavBar";

const style =theme=>({
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    paperT1:{
        ...theme.mixins.gutters(),
        position: 'absolute',
        top:'39%',
        left: '33%',
        paddingBottom: theme.spacing.unit * 2,
        paddingTop: '0.5%',
        height: 'auto',
        width: 'auto',
        alignItems: 'center'
    },
    gridList: {
        width: 400,
        height: 300,
    },
});
const mapStateToProps = state => ({
    ItemsYonker: state.items
});

class ListCars extends Component{
    constructor(props){
        super(props);
        this.state={
            SCar:'',
        }
    }

    render(){
        const{classes} = this.props;
        let filterCar = this.props.ItemsYonker.itemsCarros.filter(
            (carro)=>{
                return carro.pieza.toLowerCase().indexOf(this.state.SCar.toLowerCase()) !== -1;
            }
        )
        return(
            <div>
                <div>
                    <NavBar/>
                </div>
                <Paper className={classes.paperT1}>
                        <GridList cellHeight={60} className={classes.gridList} cols={1}>
                            {filterCar.map((row)=>{
                                return <ListItem key={row.id}>
                                        <ListItemAvatar>
                                            <Avatar src={row.img} className={classes.bigAvatar}/>
                                        </ListItemAvatar>
                                        <ListItemText primary={row.nombre} secondary={row.pieza+'-'+row.modelo+'-'+row.marca}/>
                                </ListItem>
                                
                            })}
                        </GridList>
                    </Paper>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(withStyles(style)(ListCars))