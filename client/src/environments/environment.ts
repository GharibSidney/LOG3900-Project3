// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: true,
    serverUrlApi: 'http://ec2-3-12-150-243.us-east-2.compute.amazonaws.com:3000/api',
    serverUrl: 'http://ec2-3-12-150-243.us-east-2.compute.amazonaws.com:3000',
    // serverUrlApi: 'http://localhost:3000/api',
    // serverUrl: 'http://localhost:3000',
    // serverUrlApi: 'http://10.200.14.100:5001/api',
    // serverUrl: 'http://10.200.14.100:5001',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
