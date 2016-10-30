# phisher.men
A service for simple phishing simulation

## Development
The frontend has a minimalistic setup that avoids using large frameworks so we can work closer to the actual browser. This is done to allow tight control for older browser support and to make sure we can execute any SEO tricks we might need in the future.

1. Make sure you have [Node.js](https://nodejs.org/en/) intalled, it was build with v6.x and not tested on v7 and above. You can then clone the repository to your PC

	```
	git@github.com:phishermen/phisher.men.git
	```

2. Then move into the just created directory and install the required (development) dependencies:

	```
	cd phisher.men
	npm install
	```
	
3. A [development server](https://github.com/mattdesl/budo) is included to facilitate quick interations. By runnign it a browser window should open that automatically reloads whenever you make changes to the code, to launch it simply run: 

	```
	npm start
	```

## Deployment