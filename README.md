# React Pokemon Battles
A simple game built with React, where you choose a Pokémon card and battle a random opponent.<br>
You can visit the [demo](https://react-pokemon-battles.herokuapp.com/).
## The Game
First, the player chooses a Pokémon card. Then, a random Pokémon is choosen and the battle will begin as soon as the player hits the battle button. All of the moves (attacks) available for a Pokémon are choosen randomly.<br>
<img alt="choose a card" src="https://github.com/danielsason112/react-pokemon-battles/blob/main/public/choose-a-card.png" width="80%" />
<br>
On the player's turn, the available moves are showen in the battle menu, and when clicking on one of them, the player's Pokémon will perform the attack. Next, the opponent Pokémon will attack with one randomly choosen move. The hit damage is in the range of 0 to the move's power (showen in the Pokémon card). Those two steps are repeated until one of the Pokémon hp reaches 0, and the winner is anounced.<br>
<img alt="battle" src="https://github.com/danielsason112/react-pokemon-battles/blob/main/public/battle.png" width="60%" />
## Under The Hood
- **React** - creat-react-app.
- **React** Router - A collection of navigational components for routing.
- **PokeAPI** - RESTful API serving all of Pokémon data.
- **pokeapi-js-wrapper** - An asynchronous PokeAPI wrapper with built-in cache for browsers.
## Instructions
### Install
Clone the repostory and install the required dependencies:
```sh
npm install
```
### Run The App
Run the app in development mode:
```sh
npm run start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br><br>
You can also build the app for production to the `build` folder:
```sh
npm run build
```
It correctly bundles React in production mode and optimizes the build for the best performance.
