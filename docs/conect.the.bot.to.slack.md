
## Create a Slack Application for your bot

Log into  [Slack](https://slack.com/signin)  and then go to  [create a Slack application](https://api.slack.com/apps)  channel.

![Set up bot](https://docs.microsoft.com/en-us/azure/bot-service/media/channels/slack-newapp.png?view=azure-bot-service-4.0)

## Create an app and assign a Development Slack team
Enter an App Name and select a Development Slack Team. If you are not already a member of a Development Slack Team,  [create or join one](https://slack.com/).

![Create app](https://docs.microsoft.com/en-us/azure/bot-service/media/channels/slack-createapp.png?view=azure-bot-service-4.0)

Click  **Create App**. Slack will create your app and generate a Client ID and Client Secret.

## Add a new Redirect URL

Next you will add a new Redirect URL.

1.  Select the  **OAuth & Permissions**  tab.
2.  Click  **Add a new Redirect URL**.
3.  Enter  [https://slack.botframework.com](https://slack.botframework.com/).
4.  Click  **Add**.
5.  Click  **Save URLs**.

![Add Redirect URL](https://docs.microsoft.com/en-us/azure/bot-service/media/channels/slack-redirecturl.png?view=azure-bot-service-4.0)

## Create a Slack Bot User

Adding a Bot User allows you to assign a username for your bot and choose whether it is always shown as online.

1.  Select the  **Bot Users**  tab.
2.  Click  **Add a Bot User**.

![Create bot](https://docs.microsoft.com/en-us/azure/bot-service/media/channels/slack-createbot.png?view=azure-bot-service-4.0)

Click  **Add Bot User**  to validate your settings, click  **Always Show My Bot as Online**  to  **On**, and then click  **Save Changes**.

![Create bot](https://docs.microsoft.com/en-us/azure/bot-service/media/channels/slack-createapp-addbotuser.png?view=azure-bot-service-4.0)

## Subscribe to Bot Events

Follow these steps to subscribe to six particular bot events. By subscribing to bot events, your app will be notified of user activities at the URL you specify.

Tip

Your bot handle is the name of your bot. To find a bot's handle, visit  [https://dev.botframework.com/bots](https://dev.botframework.com/bots), choose a bot, and record the name of the bot.

1.  Select the  **Event Subscriptions**  tab.
    
2.  Click  **Enable Events**  to  **On**.
    
3.  In  **Request URL**, enter  `https://slack.botframework.com/api/Events/{YourBotHandle}`, where  `{YourBotHandle}`  is your bot handle, without the braces. The bot handle used in this example is  **ContosoBot**.
    
    ![Subscribe Events: top](https://docs.microsoft.com/en-us/azure/bot-service/media/channels/slack-subscribeevents-a.png?view=azure-bot-service-4.0)
    
4.  In  **Subscribe to Bot Events**, click  **Add Bot User Event**.
    
5.  In the list of events, select these six event types:
    
    -   `member_joined_channel`
    -   `member_left_channel`
    -   `message.channels`
    -   `message.groups`
    -   `message.im`
    -   `message.mpim`
    
    ![Subscribe Events: middle](https://docs.microsoft.com/en-us/azure/bot-service/media/channels/slack-subscribeevents-b.png?view=azure-bot-service-4.0)
    
6.  Click  **Save Changes**.
    
    ![Subscribe Events: bottom](https://docs.microsoft.com/en-us/azure/bot-service/media/channels/slack-subscribeevents-c.png?view=azure-bot-service-4.0)
    

## Add and Configure Interactive Messages (optional)
If your bot will use Slack-specific functionality such as buttons, follow these steps:

1.  Select the  **Interactive Components**  tab and click  **Enable Interactive Components**.
2.  Enter  `https://slack.botframework.com/api/Actions`  as the  **Request URL**.
3.  Click the  **Save changes**  button.

![Enable messages](https://docs.microsoft.com/en-us/azure/bot-service/media/channels/slack-messageurl.png?view=azure-bot-service-4.0)

## Gather credentials

Select the  **Basic Information**  tab and scroll to the  **App Credentials**  section. The Client ID, Client Secret, and Verification Token required for configuration of your Slack bot are displayed.

![Gather credentials](https://docs.microsoft.com/en-us/azure/bot-service/media/channels/slack-appcredentials.png?view=azure-bot-service-4.0)

## Submit credentials
In a separate browser window, return to the Bot Framework site at  `https://dev.botframework.com/`.

1.  Select  **My bots**  and choose the Bot that you want to connect to Slack.
2.  In the  **Channels**  section, click the Slack icon.
3.  In the  **Enter your Slack credentials**  section, paste the App Credentials from the Slack website into the appropriate fields.
4.  The  **Landing Page URL**  is optional. You may omit or change it.
5.  Click  **Save**.

![Submit credentials](https://docs.microsoft.com/en-us/azure/bot-service/media/channels/slack-submitcredentials.png?view=azure-bot-service-4.0)

Follow the instructions to authorize your Slack app's access to your Development Slack Team.

## Enable the bot

On the Configure Slack page, confirm the slider by the Save button is set to  **Enabled**. Your bot is configured to communicate with users in Slack.

## Install your app to your workspace

1.  Select the  **Basic information**  tab.
2. Click Install your app to your workspace

![enter image description here](https://i.imgur.com/ZbUmnVr.png)


3. Click Install button 



![enter image description here](https://i.imgur.com/bkqMihk.png)

**Now you can try your bot!**
[Original post](https://docs.microsoft.com/en-us/azure/bot-service/bot-service-channel-connect-slack?view=azure-bot-service-4.0#create-a-slack-application-for-your-bot)

