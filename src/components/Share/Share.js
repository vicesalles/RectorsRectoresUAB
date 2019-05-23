import React,{Component} from 'react';

import {withRouter} from 'react-router-dom';
import {Grid,Typography} from '@material-ui/core'


class Share extends Component {
    state={
        currentUrl:"http://vicesalles.me"
    }

    componentDidMount(){

        console.log('Props',this.props);
        

    }

    render(){
        return(<Grid>
            <Typography>Botons per compartir</Typography>
            <ul>
                <li>Whatsapp</li>
                <li>Telegram</li>
                <li>Twitter</li>
                <li>Facebook</li>
            </ul>           
        </Grid>)
    }
}



export default withRouter(Share);