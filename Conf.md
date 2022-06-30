# Ligne à modifier pour la mise en production

## config.json

### isprod : true

```json
{
	"serveur": {
		"urlProd": "https://live.neos360.com/apical/test/apicam",
		"urlDev": "http://127.0.0.1:5503",
		"isProd": false
	},
	"json": {
		"timer": "60000",
		"images": "/assets/config/image.json",
		"coords": "/assets/config/pointCoord_overlay.json"
	}
}
```

## reload.js

```js
const response = await fetch(
	//"https://live.neos360.com/eso/paranal/apicam/assets/config/config.json"
	"http://127.0.0.1:5503/assets/config/config.json"
	//"https://live.neos360.com/apical/test/apicam/assets/config/config.json"
);
```

## loadView.js

```js
fetch(
	"http://127.0.0.1:5503/assets/config/image.json"
	//"https://live.neos360.com/apical/test/apicam/assets/config/image.json"
);
```

## dateImg.js

```js
fetch(
	"http://127.0.0.1:5503/assets/config/image.json"
	//"https://live.neos360.com/apical/test/apicam/assets/config/image.json"
);
```
