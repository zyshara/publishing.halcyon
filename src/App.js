import React, { Component } from "react";

import "./App.css";


const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dolor mauris, eleifend sed justo id, imperdiet volutpat enim. In euismod interdum augue a tristique. Quisque pulvinar felis in lectus tincidunt lacinia. Vestibulum ut est orci. Maecenas congue, nisi vitae mattis condimentum, justo risus congue lacus, scelerisque ultricies tortor justo at libero.";

const twitter = "https://twitter.com/HalcyonLV";
const instagram = "https://instagram.com/halcyonlv";
const facebook = "https://www.facebook.com/LvHalcyon";
const soundcloud = "https://soundcloud.com/halcyonlv";


class App extends Component {
    render() {
        return (
            <div id="root">
                <div id="main-contain">
                    <div className="background"/>
                    <div id="main-contain-overlay"/>
                    <div id="content-contain">
                        <header>
                            <img id="logo" src={ require("./logo.png") }/>
                            <h1> Music Publishing </h1>
                            <div id="description">{ description }</div>
                        </header>
                        <div id="content">
                            <div id="playlist-wrapper">
                                <iframe
                                    src="https://open.spotify.com/embed/playlist/5l5txNB8WUuYKVEDPZIFZT"
                                    frameborder="0"
                                    allowtransparency="true"
                                    allow="encrypted-media">
                                </iframe>
                            </div>
                        </div>
                        <h2>{ "Contact" }</h2>
                        <footer>
                            <img className="icon" onClick={ () => { window.open(twitter) }} src={ require("./twitter.png") }/>
                            <img className="icon" onClick={ () => { window.open(instagram) }} src={ require("./instagram.png") }/>
                            <img className="icon" onClick={ () => { window.open(facebook) }} src={ require("./facebook.png") }/>
                            <img className="icon" onClick={ () => { window.open(soundcloud) }} src={ require("./soundcloud.png") }/>
                        </footer>
                    </div>
                </div> 
            </div>
        )
    }
}

export default App;
