![Pen](https://twemoji.maxcdn.com/36x36/2712.png) twemoji-input
=============

## What is it![Question Sign](https://twemoji.maxcdn.com/16x16/2754.png)

This simple javascript function that allows you to easily past twemoji in textarea.

[Demo](http://codepen.io/levchenkod/full/VYKXOR/)


## How to use it![Question Sign](https://twemoji.maxcdn.com/16x16/2754.png)

First add sourse files 
```html
<head>
  <link rel="stylesheet" type="text/css" href="./twemoji.input.css">
  <script src="//twemoji.maxcdn.com/twemoji.min.js"></script>
  <script src="./twemoji.input.js"></script>
</head>
```

then create<code>textarea</code>element

```html
<textarea id="my-input"></textarea>
```

and init the code

```javascript
var twi = new TwemojiInput(document.getElementById('my-input'));
```

grab message from <code>textarea</code>
```javascript
var value = document.getElementById('my-input').value;
```


## One more thing![Poiter Up](https://twemoji.maxcdn.com/36x36/261d.png)

You still need to parse emoji, which placed outside of textarea, manualy with 
```javascript
twemoji.parse('I \u2764\uFE0F emoji!');
```

[More details on twemoji's git](https://github.com/twitter/twemoji)

## License 

No License. Just take and use. 

And [tweet if you tweet](https://twitter.com/intent/tweet?url=https://github.com/LevchenkoD/twemoji-input&text=The%20thing%20that%20helps%20use%20twemoji%20on%20any%20website%20%F0%9F%91%8C%20&hashtags=twemojiInput,twemoji,emoji) ![Victory](https://twemoji.maxcdn.com/16x16/270c.png)

