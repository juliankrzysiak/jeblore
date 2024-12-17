<!--
Hey, thanks for using the jeblore template.  
If you have any enhancements, then fork this project and create a pull request 
or just open an issue with the label "enhancement".

Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->

<!--
This README is a slimmed down version of the original one.
Removed sections:
- Screenshots
- Running Test
- Deployment
- FAQ
- Acknowledgements
-->

<div align="center">

  <img src="public/jeb-og.jpg" alt="logo" width="400" height="auto" />
  <h1>jeblore</h1>
  
  <p>
    A web comic about living with Jeb and other creatures.  
  </p>

  
<!-- Badges -->
<p>
  <a href="https://github.com/juliankrzysiak/jeblore/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/juliankrzysiak/jeblore" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/juliankrzysiak/jeblore" alt="last update" />
  </a>
  <a href="https://github.com/juliankrzysiak/jeblore/network/members">
    <img src="https://img.shields.io/github/forks/juliankrzysiak/jeblore" alt="forks" />
  </a>
  <a href="https://github.com/juliankrzysiak/jeblore/stargazers">
    <img src="https://img.shields.io/github/stars/juliankrzysiak/jeblore" alt="stars" />
  </a>
  <a href="https://github.com/juliankrzysiak/jeblore/issues/">
    <img src="https://img.shields.io/github/issues/juliankrzysiak/jeblore" alt="open issues" />
  </a>
  <a href="https://github.com/juliankrzysiak/jeblore/LICENSE">
    <img src="https://img.shields.io/github/license/juliankrzysiak/jeblore" alt="license" />
  </a>
</p>
   
<h4>
    <a href="https://jeblore.com">View Demo</a>
  <span> · </span>
    <a href="https://github.com/juliankrzysiak/jeblore">Documentation</a>
  <span> · </span>
    <a href="https://github.com/juliankrzysiak/jeblore/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/juliankrzysiak/jeblore/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->
# Table of Contents

- [About the Project](#about-the-project)
  * [Tech Stack](#tech-stack)
  * [Features](#features)
  * [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Run Locally](#run-locally)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)
  

<!-- About the Project -->
## About the Project

<div align="center"> 
  <img src="public/desktop-screenshot.png" alt="desktop screenshot" />
  <img src="public/mobile-screenshot.png" alt="mobile screenshot" />
</div>


<!-- TechStack -->
### Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://astro.build/">Astro</a></li>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
      <li><a href="https://astro.build/">Astro</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://keystatic.com/">Keystatic</a></li>
  </ul>
</details>

<!-- 
<details>
<summary>DevOps</summary>
  <ul>
  </ul>
</details>
-->

<!-- Features -->
### Features

- Performant static site showcasing weekly comics
- Github-based CMS makes it easy to manage data
- Simple and accessible design, reflecting the simple nature of Jeb
- A Cool Theme Picker

<!-- Color Reference 
### Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary Color | ![#222831](https://via.placeholder.com/10/222831?text=+) #222831 |
| Secondary Color | ![#393E46](https://via.placeholder.com/10/393E46?text=+) #393E46 |
| Accent Color | ![#00ADB5](https://via.placeholder.com/10/00ADB5?text=+) #00ADB5 |
| Text Color | ![#EEEEEE](https://via.placeholder.com/10/EEEEEE?text=+) #EEEEEE |
-->


<!-- Env Variables -->
### Environment Variables

There are no environment variables for this project as it is locally based for now.

<!-- Getting Started -->
## Getting Started

<!-- Prerequisites -->
### Prerequisites

This project uses pnpm as the package manager

```bash
 npm install --global pnpm
```

<!-- Installation 
### Installation

Install jeblore with pnpm

```bash
  pnpm install jeblore
  cd jeblore
```
-->

<!-- Run Locally -->
### Run Locally

Clone the project

```bash
  git clone https://github.com/juliankrzysiak/jeblore.git
```

Go to the project directory

```bash
  cd jeblore
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm start
```


<!-- Usage -->
## Usage

When you are running the project locally, navigate to http://127.0.0.1:4321/keystatic to manage your data.

If you would like to allow the data to be changed while in production for yourself or other users through github, change the storage setting in `keystatic.config.ts` from 'local' to 'github' and follow the instructions at [keystatic github guide](https://keystatic.com/docs/github-mode).

You can also use keystatic's [cloud storage](https://keystatic.com/docs/cloud), which makes it easier for non-technical users to access the CMS. 

```javascript
	storage: {
		kind: 'github',
	}

 ```

Otherwise the website is quite simple to use. Everything is automatically sorted and linked based on comic release dates. 

<!-- Contributing -->
## Contributing

<a href="https://github.com/juliankrzysiak/jeblore/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=juliankrzysiak/jeblore" />
</a>


Contributions are always welcome!

<!-- Code of Conduct 
### Code of Conduct

Please read the [Code of Conduct](https://github.com/juliankrzysiak/jeblore/blob/master/CODE_OF_CONDUCT.md)
-->


<!-- License -->
## License

All images and assets are not allowed to be used in any other projects.
The software itself is distributed under the MIT License for software. See LICENSE.txt for more information.


<!-- Contact -->
## Contact

Your Name - [@bluesky_handle](https://twitter.com/twitter_handle) - jkrzysiak13@gmail.com

Project Link: [https://github.com/juliankrzysiak/jeblore](https://github.com/juliankrzysiak/jeblore)

<!-- Acknowledgments -->
## Acknowledgements

 - [Shields.io](https://shields.io/)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#travel--places)
 - [Readme Template](https://github.com/othneildrew/Best-README-Template)
