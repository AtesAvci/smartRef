import React, {Component} from "react"
import "Home.css"

import{
    Button
 } from "reactstrap"

export default class Home extends Component {
    render() {
        return(
            <div>
                <Button href="/search">
                    English
                </Button>

                <Button href="/">
                    Français
                </Button>

            </div>
        )
    }
}

