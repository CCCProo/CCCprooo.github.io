Notification.requestPermission(function(permission){
// переменная permission содержит результат запроса
console.log('Результат запроса прав:', permission);
});
var notification = new Notification(title, options);

//var notification = new Notification('Сколько ТЫЖ программистов нужно чтобы вкрутить лампочку?',
//{ body: 'Только ты!', dir: 'auto', icon: 'icon.jpg' }
//);