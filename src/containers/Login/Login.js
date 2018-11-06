import React, { Component } from 'react';
import classes from './Login.module.scss';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import facebookLogo from '../../assets/icons/facebook.png';
import instagramLogo from '../../assets/icons/instagram.png';
import Logos from '../../components/Logos/Logos';

class Login extends Component {
    handleLogin = (e) => {
        e.preventDefault();
        this.props.history.push('/game')
    }
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.brandContainer}>
                    Diseñado por: <br />
                    'Nombre de la empresa'
                </div>
                <Logos className={classes.logos}/>
                <form className={classes.form}>
                    <div className={classes.formItems}>
                        <Input className={classes.formItem} type="text" id="instagram" name="instagram" label="Facebook" placeholder="Instagram..." icon={<img src={instagramLogo} alt="instagramLogo" />} />
                        <Input className={classes.formItem} type="text" id="facebook" name="facebook" label="Instagram" placeholder="Facebook..." icon={<img src={facebookLogo} alt="facebookLogo" />} />
                    </div>
                    <div className={classes.formItems}>
                        <Button className={classes.button} onClick={this.handleLogin}>
                            ¡Empezar!
                        </ Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
