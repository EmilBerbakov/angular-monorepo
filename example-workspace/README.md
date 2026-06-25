# How to do all this

1. start with empty workspace:
```
ng new example-workspace --no-create-application
```
2. create desktop application
```
ng g application desktop-application
```
3. create mobile application
```
ng g application mobile-application
```

4. add capacitor:
```
ng add @capacitor/angular
```

5. generate capacitor.config.ts:

```
npx cap init
```

6. turn off telemetry
```
npx cap telemetry off
```

7. add Android and IOS application folders:
```
npx cap add android
npx cap add ios
```

This creates the following file structure:
```
example-workspace/
|--android/
|--ios/
|--node_modules/
|--projects/
  |--desktop-application/
    |--public/
    |--src/
  |--mobile-application/
    |--public/
    |--src/
|--capacitor.config.ts
|--package.json
|--angular.json
|--tsconfig.json
```
