import React from "react";
import { observer } from 'mobx-react';

export class About extends React.Component {
    render() {
        return (
            <>
                <h4 className="">Notifications count: {this.props.store.notificationsCount}</h4>
                <button className="btn btn-primary" onClick={() => this.props.store.updateNotificationsCount()}>Increment notifications count</button>
            </>
        )
    }
}

export default observer(About);
