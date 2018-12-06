
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript and the DOM</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <button id="toggleList">Hide list</button>
    <div class="list">
      <p class="description">Things that are purple:</p>
      <input type="text" class="description">
      <button class="description">Change list description</button>
      <?php

      $liList = [
          'grapes',
          'amethyst',
          'lavender',
          'plumns',
      ];
      ?>
      <ul>
        <?php foreach($liList as $key => $li) : ?>
            <li><?= $li; ?><button>Remove</button></li>
        <?php endforeach; ?>

        <!-- <li>grapes</li>
        <li>amethyst</li>
        <li>lavender</li>
        <li>plums</li> -->
      </ul>
      <input type="text" class="addItemInput">
      <button class="addItemButton">Add item</button>
      <button class="removeItemButton">Remove last item</button>
    </div>
    <script src="app.js"></script>
  </body>
</html>
