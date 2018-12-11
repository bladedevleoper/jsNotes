<?php

    $liArray = [
        'Person 1',
        'Person 2',
        'Person 3',
        'Person 4'
    ]

?>
<!doctype html>
<html>
    <head>
        <title></title>
        <style>
            button{
                background-color:black;
                color:#ffffff;
                padding:5px;
            }
        </style>
    </head>
    <body>

        <!-- practice traversing the dom-->
    
    <div class="listDiv">

        <ul>
           <?php foreach($liArray as $key => $value) : ?>
           
            <li><?= $value . ' '; ?><button>Remove <?= $value;?></button></li>

           <?php endforeach; ?>
        </ul>

    </div>
    <script src="parentNode.js"></script> 
    </body>
</html>