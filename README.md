# phisher.men
A service for simple phishing simulation

## Development
The frontend has a minimalistic setup that avoids using large frameworks so we can work closer to the actual browser. This is done to allow tight control for older browser support and to make sure we can execute any SEO tricks we might need in the future.

1. Make sure you have [Node.js](https://nodejs.org/en/) intalled, it was build with v6.x and not tested on v7 and above. On Windows, make sure [mingw](http://www.mingw.org/) is setup ([Git for windows](https://git-scm.com/download/win) comes with it)


2. You can then clone the repository to your PC

	```
	$ git clone git@github.com:phishermen/phisher.men.git
	```

2. Then move into the just created directory and install the required (development) dependencies:

	```
	$ cd ./phisher.men
	$ npm install
	```
	
3. A [development server](https://github.com/mattdesl/budo) is included to facilitate quick interations. By running it a browser window should open that automatically reloads whenever you make changes to the code, to launch it simply run: 

	```
	$ npm start
	```

## Deployment
The frontend is statically hosted on AWS S3, we're are already using AWS for the serverless backend so also using their highly available object storage made sense. 

 1. We use [Terraform](https://www.terraform.io/downloads.html) to handle the deployment, make sure it is installed and check it is available and working: 
 
 	```
 	$ terraform version
 	> Terraform v0.7.7
 	```
 	
 2. Terraform will require AWS credentials in order to modify the necessary cloud resources. To provide these create a `.aws_creds` file in the project directory that looks like this: 

 	```ini
 	[phisher.men]
aws_access_key_id=<your_access_key>
aws_secret_access_key=<hour_secret_key>
 	```
 	
 3. In order to deploy a new version, you'll first need to build it:

 	```
 	$ npm run build 
 	```

 4. The newly build artifacts can then be published by letting Terraform do its thing, a publicly available endpoint will be returned:

 ```
 $ terraform apply
 ...
 > dev_s3_endpoint = http://...
 ```