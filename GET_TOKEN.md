# Get token from spotify `now-playing`

##### Get `code` from `client_id`

> use the browser

```
https://accounts.spotify.com/authorize?client_id=<your_client_id>&response_type=code&redirect_uri=<encoded_callback_uri>&scope=user-read-currently-playing%20user-read-playback-state&state=34fFs29kd09
```

##### Get token

> use curl

```
Authorization: Basic *<base64 encoded client_id:client_secret>*
```

```
curl -H "Authorization: Basic ZjM...zE=" -d grant_type=authorization_code -d code=MQCbtKe...44KN -d redirect_uri=https%3A%2F%2Fwww.foo.com%2Fauth https://accounts.spotify.com/api/token
```
