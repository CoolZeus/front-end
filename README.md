# puzzlesubs.com ReactJS Front-end Repo

İlk versiyon çok kötü yazıldığı (yazdığım) için tekrar sıfırdan yazıldı. [React](https://github.com/facebook/react) ve [ReactN](https://github.com/CharlesStover/reactn) paketleri başta olmak üzere [Material-UI](https://github.com/mui-org/material-ui) ve [styled-components](https://github.com/styled-components/styled-components) kullanarak hazırlandı. (İlk projedeki hataları olabildiğince tekrarlamamaya ve özellik eklenebilir bir kod çıkarmaya çalıştım, umarım oldu.)

## Yükleme Talimatları

WIP.

### Gerekenler

Öncelikle **./.env**, **/public/index.html**, **/src/static/fullLogo.png** ve **/src/static/logo.png** dosyalarını oluşturmanız gerekiyor. Örnekleri aşağıdaki gibidir.

#### 1. ./.env
```env
REACT_APP_SITENAME="" // Sitenin isim alanı.
REACT_APP_DISQUS_SHORTNAME="" // Kullanacağınız disqus kısa ismi.
REACT_APP_DEV_API_URL="" // Dev ortamında istekleri yapmak için kullanacağı alan adı. (http://localhost:5000 gibi)
``` 

#### 2. /public/index.html 
```html
<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#3B3E42">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Site name</title>
  </head>
  <body>
    <noscript>
      <style>
        p {
          color: red;
          font-family: 'Roboto', sans-serif;
          font-weight: bold;
          font-size: 36px;
          width: 100vw;
          height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        a {
          margin-left: 10px;
        }
      </style>
      <p>Bu sayfayı görüntülemek için JavaScript'e ihtiyacınız var. Daha iyi bir browser indirmek için <a href="http://outdatedbrowser.com/en" target="_blank">buraya tıklayın.</a></p>
    </noscript>
    <div id="app-mount"></div>
  </body>
</html>
```
meta tagları harici genel hatları yukardaki gibi olmalıdır. En önemli nokta id="app-mount"tur. Bu div, programın mountlandığı divdir. Eğer id'yi değiştirmek isterseniz /src/index.js dosyasında aşağıdaki "app-mount" değerini de değiştirmelisiniz.
```jsx
ReactDOM.render(<App />, document.getElementById('app-mount'))
```

#### 3. /src/static/fullLogo.png (--- x 150)
<img src="https://i.ibb.co/m6fchsV/fullLogo.png" alt="fullLogo" width="200px"/>

#### 4. /src/static/logo.png (500 x 500)
<img src="https://i.ibb.co/gy1DrT9/logo.png" alt="logo" width="100px" height="100px"/>