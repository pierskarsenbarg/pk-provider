// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("pk-provider");

export declare const myKey: string | undefined;
Object.defineProperty(exports, "myKey", {
    get() {
        return __config.get("myKey");
    },
    enumerable: true,
});

export declare const version: string | undefined;
Object.defineProperty(exports, "version", {
    get() {
        return __config.get("version");
    },
    enumerable: true,
});
