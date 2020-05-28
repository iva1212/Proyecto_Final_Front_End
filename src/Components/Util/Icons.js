import React,{Component} from 'react';
import {Tooltip,OverlayTrigger} from 'react-bootstrap';
import { IconContext } from "react-icons";
import {GiPlatform,GiCrosshair,GiSwordsEmblem,GiPotionBall,GiJigsawPiece,GiJoystick} from 'react-icons/gi'
class Icons extends Component {
    render(){
        const game = this.props.game;
        const items = [];
    for(let i=0;i<game.genres.length;i++){
        if(game.genres[i] === "Shooter"){
            items.push(
                <OverlayTrigger
                key = 'top'
                placement='top'
                overlay={
                    <Tooltip id='tooltip-top'>
                        Shooter
                    </Tooltip>
                    }>
                    <span>
                        <IconContext.Provider value={{size:"2em"}}>
                            
                                <GiCrosshair/>
                            
                        </IconContext.Provider>
                    </span>
                </OverlayTrigger>
            );
        }
        else if(game.genres[i] === "Platformer"){
            items.push(
                <OverlayTrigger
                key = 'top'
                placement='top'
                overlay={
                    <Tooltip id='tooltip-top'>
                        Platformer
                    </Tooltip>
                    }>
                    <span>
                        <IconContext.Provider value={{size:"2em"}}>
                            <GiPlatform/>
                        </IconContext.Provider>
                    </span>
                </OverlayTrigger>
            );
        }
        else if(game.genres[i] === "Adventure"){
            items.push(
                <OverlayTrigger
                key = 'top'
                placement='top'
                overlay={
                    <Tooltip id='tooltip-top'>
                        Adventure
                    </Tooltip>
                    }>
                    <span>
                        <IconContext.Provider value={{size:"2em"}}>
                            <GiSwordsEmblem/>
                        </IconContext.Provider>
                    </span>
                </OverlayTrigger>
            );
        }
        else if(game.genres[i] === "RPG"){
            items.push(
                <OverlayTrigger
                key = 'top'
                placement='top'
                overlay={
                    <Tooltip id='tooltip-top'>
                        RPG
                    </Tooltip>
                    }>
                    <span>
                        <IconContext.Provider value={{size:"2em"}}>
                            <GiPotionBall/>
                        </IconContext.Provider>
                    </span>
                </OverlayTrigger>
            );
        }
        else if(game.genres[i] === "Puzzle"){
            items.push(
                <OverlayTrigger
                key = 'top'
                placement='top'
                overlay={
                    <Tooltip id='tooltip-top'>
                        Puzzle
                    </Tooltip>
                    }>
                    <span>
                        <IconContext.Provider value={{size:"2em"}}>
                            <GiJigsawPiece/>
                        </IconContext.Provider>
                    </span>
                </OverlayTrigger>
            );
        }
        else if(game.genres[i] === "Arcade"){
            items.push(
                <OverlayTrigger
                key = 'top'
                placement='top'
                overlay={
                    <Tooltip id='tooltip-top'>
                        Arcade
                    </Tooltip>
                    }>
                    <span>
                        <IconContext.Provider value={{size:"2em"}}>
                            <GiJoystick/>
                        </IconContext.Provider>
                    </span>
                </OverlayTrigger>
            );
        }
    }
    return(
        <span>
            {items}
        </span>
    )
        
        
}
        



}


export default Icons;