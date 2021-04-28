import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AppConfig {
    appSettings: {
        apiEndpoints: {
            newsapi: {
                url: string;
                apiKey: string;
            };
        };
    };
}
