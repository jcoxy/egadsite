import * as React from "react"
import Header from "../components/header"

//styles
const mainStyle = {
    maxWidth: 1360,
    marginLeft: "auto",
    marginRight: "auto",
}

//data
const hello = "Hi, this is an About page!"

const items = [
    {
        title: "The first of the items",
        url: "#one",
        description: 
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        color: "#CDE5D7",
    },
    {
        title: "Item number two!",
        url: "#two",
        description: 
            "By injected humour, or randomised words which don't look even slightly believable.",
        color: "#DED6D1",
    },
    {
        title: "The third of fourths",
        url: "#three",
        description: 
            "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        color: "#EEC6CA",
    },
    {
        title: "The last of the gang of four",
        url: "#four",
        description: 
            "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        color: "#FFB7C3",
    },
]

//components
const AboutPage = function() {
    return (
        <div className="container">
            <Header />
            <main style={mainStyle}>
                <h1>{hello}</h1>
                {items.map(function(item) {
                            return (
                                <a href={item.url}>
                                    <div style={{backgroundColor: item.color, padding: 24, marginBottom: 32 }}>
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                </a>
                            )
                        }
                    )
                }
            </main>
        </div>
    )
}

export default AboutPage