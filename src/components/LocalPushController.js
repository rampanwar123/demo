import PushNotification from 'react-native-push-notification'

PushNotification.configure({
    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
      console.log('LOCAL NOTIFICATION ==>', notification)
    },
  
    popInitialNotification: true,
    requestPermissions: true
  })

  export const localNotification = () => {
    PushNotification.localNotification({
      autoCancel: true,
      largeIcon: "ic_launcher",
      smallIcon: "ic_notification",
      bigText: "My big text that will be shown when notification is expanded",
      subText: "This is a subText",
      color: "green",
      vibrate: true,
      vibration: 300,
      title: "Notification Title",
      message: "Notification Message",
      playSound: true,
      soundName: 'default',
      actions: '["Accept", "Reject"]',
      channelId:'1'
    });
   };