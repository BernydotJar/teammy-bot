export class SlackMiddelware {
  // tslint:disable-next-line: no-empty
  public sconstructor() {}

  public async isMentioned(context, next) {
    try {
      console.log('CONTEXT:', JSON.stringify(context));
      if (isSlackChannel(context)) {
        if (isSlackMention(context)) {
          await next();
        } else {
          if (!isSlackGroupOrChannel(context)) {
            await next();
          }
        }
      } else {
        await next();
      }
    } catch (err) {
      console.log('ERROR', err);
    }
  }
}

function isSlackGroupOrChannel(context): boolean {
  return (
    context.activity.channelData.SlackMessage.event.channel_type ===  'group' ||
    context.activity.channelData.SlackMessage.event.channel_type ===  'channel'
  );
}

function isSlackChannel(context): boolean {
  return context.activity.channelId === 'slack';
}

function isSlackMention(context): boolean {
  if (context.activity.entities[0]) {
    return (
      context.activity.entities[0].type === 'mention' &&
      context.activity.entities[0].text ===  `@${context.activity.entities[0].mentioned.name}`
    );
  }
  return false;
}
