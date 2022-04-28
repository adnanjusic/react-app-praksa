	
import { observable, action, makeObservable } from 'mobx';
 
export class NotificationStore {
    notificationsCount = 0;

    constructor(value) {
        makeObservable(this, {
            notificationsCount: observable,
            updateNotificationsCount: action
        })
        this.value = value
    }
    
    updateNotificationsCount(){
        this.notificationsCount++;
    }
}
