import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AppConfig {
    appSettings: {
        apiEndpoints: {
            newsapi: {
                version: string;
                url: string;
                apiKey: string;
            };
        };
    };
}
