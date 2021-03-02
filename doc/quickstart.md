### Step 1
Add ip-api folder in your backend/src/shared

### Step 3
Add this in your auth guard
<pre>

request.ipAddress = request?.headers['x-forwarded-for']?.split(',')[0] || request.connection.remoteAddress

</pre>

### Step 4
Add ip-adresse.decorator.ts in backend/src/shared/decorators

### Step 5
Add geolocation folder in your backend/src/api and add the geolocation module in your app.module

### Step 6
Add geolocation.service.ts in your frontend/src/services 

### Step 7
Add geolocation.utils.ts in your frontend/src/utils 

### Step 8
Add the example folder in your frontend/src/pages <br/>
Add the page in `page.navigation.tsx`:<br/>
```
<Route exact path="/example" component={ExampleScreen} />
```

That's it ! :rocket: