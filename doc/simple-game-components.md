Simple 2D Game Code Templates
=============================

# Table of contents
1. [Single page applicatoon](#index-html)
   - [HTML](#html)
   - [CSS](#css)
2. [Screen](#screen)
   - [Init screen](#init-screen)
   - [Resize screen](#resize-screen)
3. [Main loop](#main-loop)
4. [Controls](#controls)
   - [Keyboard](#keyboard)
   - [Mouse](#mouse)
   - [Gamepad](#gamepad)
5. [Moving objects](#moving-objects)
6. [Collission detection](#collission-detection)
7. [Collision response](#collission-response)
8. []

# Single page application

## HTML

Create file `index.html` with the content below.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Simple 2D Game</title>
    <meta name="description" content="Simple 2D game template.">
    <meta name="keywords" content="game, simple, 2d, template">
    <meta name="author" content="Romuald Kowalczyk">
    <link rel="icon" type="image/png" href="dist/icon.png">
    <link rel="stylesheet" href="dist/style.css">
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>
<body>
    <canvas id="screen"></canvas>
    <script type="text/javascript" src="dist/screen.js"></script>
    <script type="text/javascript" src="dist/mainloop.js"></script>
    <script type="text/javascript" src="dist/keyboard.js"></script>
    <script type="text/javascript" src="dist/game.js"></script>
</body>
</html>
```

## CSS

Create file `style.css` with te content below.

```css

```

## Icon

Create PNG file `icon.png` with 20 x 20 px size.

![icon](img/icon.png)

## Screen

Create file `screen.js`

```javascript

```