[![Build Status](https://travis-ci.org/team-machine-learning/teammy-bot.svg?branch=master)](https://travis-ci.org/team-machine-learning/teammy-bot)

# teammy-bot

Q&amp;A bot for Team International Latam

This bot has been created using [Bot Framework](https://dev.botframework.com), it shows how to create a simple bot that accepts input from the user and echoes it back.

## Prerequisites

- [Node.js](https://nodejs.org) version 10.14.1 or higher

    ```bash
    # determine node version
    node --version
    ```

## To run the bot

- Install modules

    ```bash
    npm install
    ```
- Start the bot

    ```bash
    npm start
    ```

## Create an acount in DialogFlow and configure the environment

- Go to [DialogFlow](https://dialogflow.com/) and create an acount
- [Enable the Dialogflow API](https://console.cloud.google.com/flows/enableapi?apiid=dialogflow.googleapis.com)
- [Set up authentication with a service account](https://cloud.google.com/docs/authentication/getting-started) so you can access the API from your local workstation.

    ```javscript
    //You will get a json like:
        {
        "type": "service_account",
        "project_id": "your-project-id",
        "private_key_id": "5oMe4lPhaNumeR1cCharaCterS",
        "private_key": "-----BEGIN PRIVATE KEY-----\n5oMe4lPhaNumeR1cCharaCterS\n-----END PRIVATE KEY-----\n",
        "client_email": "client-email@client-email.iam.gserviceaccount.com",
        "client_id": "00000000000000000000",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/dialogflow-saovqb%40BOT-NAME-scnpuq.iam.gserviceaccount.com"
        }
    ```
- Export environment variables:

    ```
        DECRYPT_PASSWORD=think_password_to_keep_in_safe_private_key_from_the_last_step

        GOOGLE_KEY_ID=your_private_key_id_from_the_last_step
    ```

- Copy constants in ./config/development.yml from google json

    ```
        google: 
            project_id: your-project-id
            client_email: client-email@client-email.iam.gserviceaccount.com
            client_id: "00000000000000000000"
            client_x509_cert_url: https://www.googleapis.com/robot/v1/metadata/x509/dialogflow-saovqb%40BOT-NAME-scnpuq.iam.gserviceaccount.com

    ```


    - Encrypt the private_key from the google json:

        - copy the entire private_key from the google json: copy from "-----BEGIN PRIVATE KEY-----\n" to "\n-----END PRIVATE KEY-----\n"

        - run key.generator script and paste the entire private_key 

            ```bash
            node ./scripts/key.generator.js
            ```
        - search in root project securekey.txt and copy the content
        - paste the entire new private_key in ./config/development.yml 
    

## Testing the bot using Bot Framework Emulator

[Bot Framework Emulator](https://github.com/microsoft/botframework-emulator) is a desktop application that allows bot developers to test and debug their bots on localhost or running remotely through a tunnel.

- Install the Bot Framework Emulator version 4.3.0 or greater from [here](https://github.com/Microsoft/BotFramework-Emulator/releases)

### Connect to the bot using Bot Framework Emulator

- Launch Bot Framework Emulator
- File -> Open Bot
- Enter a Bot URL of `http://localhost:3978/api/messages`

## Deploy the bot to Azure

### Publishing Changes to Azure Bot Service

    ```bash
    # build the TypeScript bot before you publish
    npm run build
    ```

To learn more about deploying a bot to Azure, see [Deploy your bot to Azure](https://aka.ms/azuredeployment) for a complete list of deployment instructions.
