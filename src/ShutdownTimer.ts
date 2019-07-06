import * as moment from "moment";
import { App } from "electron";
import { ShutdownOptions } from "./ShutdownOptions";

export class ShutdownTimer {
    //private shutdownTime: moment.Moment;
    private timer : NodeJS.Timeout;

    public constructor(app: App, options?: ShutdownOptions) {
        //this.shutdownTime =  moment.utc(time);
        this.timer = setTimeout(() => this.invokeShutdown(app), 5000);
    }

    protected invokeShutdown(app: App) {
        app.quit();
    }
}