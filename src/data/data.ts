import { Data } from "./types"

export const data: Data = {
    projects: [
        {
            name: "Calories Tracker",
            technologies: "React, Redux",
            url: "https://github.com/Robert-Jankowski/calories-tracker",
            image: "images/pexels-daria-shevtsova-704569-rescaled.jpg",
            categories: ["web"]
        },
        {
            name: "Cheat Card Game",
            technologies: "React, Node, MQTT",
            url: "https://github.com/Robert-Jankowski/cheat-card-game",
            image: "images/pexels-pixabay-279009-rescaled.jpg",
            categories: ["web"]
        },
        {
            name: "Census App (client)",
            technologies: "React, Node, Scrum",
            url: "https://github.com/ProDevTeam3/client",
            image: "images/pexels-matthias-zomer-618158-rescaled.jpg",
            categories: ["web"]
        },
        {
            name: "Labyrinth Genetic Algorithm",
            technologies: "Python, Jupyter Notebook",
            url: "https://github.com/Robert-Jankowski/labyrinth-ga",
            image: "images/pexels-steven-hylands-1650921-rescaled.jpg",
            categories: ["AI"]
        },
        {
            name: "Markov Chain sentence generator",
            technologies: "Javascript",
            url: "https://github.com/Robert-Jankowski/Markov-Chain-sentence-generator",
            image: "images/pexels-nothing-ahead-4567484-rescaled.jpg",
            categories: ["AI"]
        },
        {
            name: "Alien invasion",
            technologies: "Python",
            url: "https://github.com/Robert-Jankowski/Gra-Alien-Invasion",
            image: "images/pexels-francesco-ungaro-1670977-rescaled.jpg",
            categories: ["AI"]
        },
        {
            name: "Lorem ipsum dolor sit amet",
            technologies: "Lorem ipsum dolor sit amet",
            url: "https://github.com/Robert-Jankowski/labyrinth-ga",
            image: "https://bulma.io/images/placeholders/256x256.png",
            categories: ["AI"]
        },
        {
            name: "Lorem ipsum dolor sit amet",
            technologies: "Lorem ipsum dolor sit amet",
            url: "https://github.com/Robert-Jankowski/labyrinth-ga",
            image: "https://bulma.io/images/placeholders/256x256.png",
            categories: ["AI"]
        },
        {
            name: "Lorem ipsum dolor sit amet",
            technologies: "Lorem ipsum dolor sit amet",
            url: "https://github.com/Robert-Jankowski/labyrinth-ga",
            image: "https://bulma.io/images/placeholders/256x256.png",
            categories: ["AI"]
        }
    ],
    skills: {
        programming: [
            { name: "React", value: 4 },
            { name: "Node", value: 4 },
            { name: "Databases", value: 3 },
            { name: "Python", value: 3 },
            { name: "Linux", value: 3 },
            { name: "Scala", value: 2 },
            { name: "Java", value: 2 },
        ],
        language: [
            { name: "Polish", value: 5 },
            { name: "English", value: 4 },
            { name: "Russian", value: 2 },
        ],
        soft: [
            { name: "Courage", value: 5 },
            { name: "Focus", value: 4 },
            { name: "Commitment", value: 3 },
            { name: "Respect", value: 5 },
            { name: "Openness", value: 4 },
        ]
    },
    welcome: {
        image: "images/pexels-pixabay-315938.jpg",
        textOne: "Hello, I'm ",
        name: "Robert Jankowski",
        textTwo: "This is my portfolio."
    },
    about: [
        "I am a college student and I have just finished my second year of Practical Computer Science at the University of Gdansk. I am looking for a professional experience in IT industry.",
        "I am a curious person and I love learning new skills and technologies. During my university course I made a lot of projects, including frontend applications in React, HTTP servers, DevOps/CI configurations and data science projects in Python.",
        "One of my best qualities is being a good listener. I am not afraid to admit my lack of knowledge and ask for help. I like to share my knowledge to others as well.",
        "I love to listen to music and I play a guitar and piano. I like outdoor activities, like riding a bike or calisthenics."]
}