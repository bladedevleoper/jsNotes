<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Form Practice</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- <link rel="stylesheet" type="text/css" media="screen" href="main.css" /> -->
    
</head>
<body>
<?php

$form = [
    'First Name',
    'Surname',
    'Address',
    'Email',
    'Comments'
];

?>


<form action="" method="" id="myForm">
<div class="main-content">
    <?php foreach($form as $key => $value) : ?>

        <div><label for="<?= $value; ?>"><?= $value; ?></label></div>
        <div><input id="<?= $value; ?>" type="text" name="<?= $value; ?>"></div>

    <?php endforeach; ?>
    
</div>
</form>
<button id="add">Add Another Person</button>
<button id="remove">Remove Person</button>

<script src="form.js"></script>
</body>
</html>