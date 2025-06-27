import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import blogmock1 from "../img/blogmock1.png"
import blogmock2 from "../img/blogmock2.png"
import blogmock3 from '../img/blogmock3.png'

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Abhinav",
    lastName: "Anand",
    initials: "aa", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in India'
        },
        {
            emoji: "👨🏻‍💻",
            text: "Solving problems with code and creativity."
        },
        {
            emoji: "📧",
            text: "abhinavanand072@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/abhinavan00",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/abhinavan00/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I’m a curious full stack developer who loves to understand how things work under the hood. I enjoy turning ideas into real apps and constantly learning new technologies.",
    vision: "Eager to contribute to innovative teams and grow my expertise in a collaborative environment. I believe the best products are built when diverse minds work together with a shared purpose.",
    skills:
        {
            frontEnd: ['html5', 'css3', 'javascript', 'react.js', 'vite'],
            backEnd: ['node.js', 'express.js', 'rest API', 'gRPC'],
            database: ['postgreSQL', 'relational databases'],
            deployment: ['git', 'dbeaver', 'render.com']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'travelling',
            emoji: '✈️'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Face Detection App (Full Stack)",
            live: "https://face-detection-app-wenk.onrender.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/abhinavan00/face_detection_app", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "JS Framework Clone",
            live: "https://github.com/abhinavan00/JavaScript_Framework",
            source: "https://github.com/abhinavan00/JavaScript_Framework",
            image: mock2
        },
    ],
    blogs: [
        {
            title: "Building My 1st Full Stack App - Frontend",
            link: "https://dev.to/abhinavan00/building-my-first-full-stack-app-part-1-crafting-the-react-frontend-for-face-detection-48k1",
            image: blogmock1
        },
        {
            title: "Building My 1st Full Stack App - Backend",
            link: "https://dev.to/abhinavan00/building-my-first-full-stack-app-part-2-crafting-the-nodejs-backend-for-face-detection-295m",
            image: blogmock2
        },
        {
            title: "Building My 1st Full Stack App - Database",
            link: "https://dev.to/abhinavan00/building-my-first-full-stack-app-part-3-integrating-the-database-with-postgresql-knexjs-2674",
            image: blogmock3
        }
    ]
}