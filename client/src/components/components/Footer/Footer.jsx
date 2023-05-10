import React from "react"
import FontAwesome from "react-fontawesome"

// importting components


// importing styles
import {StyledFooter} from "./StyledFooter"

const Footer = () => (
    <StyledFooter>
        <div className="footer-content">
            <a href = "https://github.com/yashodeepchikte">
                Made with  ❤ by 
            </a>
            {/* <a href="https://github.com/yashodeepchikte/Keep-Watching"> */}
                {/* <FontAwesome  className="fa fa-github" name="clock-o" />
            </a> */}
        </div>
    </StyledFooter>
)

export default Footer