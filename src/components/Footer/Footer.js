import React from 'react';
import classes from './Footer.module.scss';
import corralLogo from '../../assets/images/corral.png';
import mcDonaldsLogo from '../../assets/images/mcdonalds.png';
import jumboLogo from '../../assets/images/jumbo.png';
import uberLogo from '../../assets/images/qbano.png'
const patrocinios = [{
    id: 'corral',
    picture: corralLogo
},
{
    id: 'macdonalds',
    picture: mcDonaldsLogo
},
{
    id: 'jumbo',
    picture: jumboLogo
}, {
    id: 'qbano',
    picture: uberLogo
},]

const Footer = props => {
    return (
        <div className={classes.container} >
            {patrocinios.map((element, index) => {
                return (
                    <div className={classes.element} key={index}>
                        <img src={element.picture} alt={element.id} />
                    </div>
                )
            })}
        </div>
    )
}

export default Footer;