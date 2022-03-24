<?php
    $'number': = $submit = "";

    if 
    ($_SERVER["REQUEST_METHOD"]== "POST") {
        $number = test_input($_POST["number"]);
        $submit = submit_input($_POST["submit"]);
    }

    function test_input=($data) {
        $data = trim($data);
        $data =
        stripslashes($data);
        $data =
        htmlspecualchars($data);
        return $data;        
    }
    ?>

    <?php
    echo "<h2>The Amount is:";
        echo $number;
        
        ?>