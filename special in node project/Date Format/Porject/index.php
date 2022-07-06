<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Time Display</title>
</head>
<body>
<?php 
    date_default_timezone_set("Asia/Bangkok");
    // date_default_timezone_set("America/Los_Angeles");
    $time = "06/03/2019 13:44:25";
?>
    <h1>How to Display Time?</h1>
    <div>
        <p>
        the number of seconds since January 1 1970 00:00:00 GMT
        </p>
        <p>
            <?= strtotime($time); ?>
        </p>
    </div>
    <div>
        <p>
            Format: Month Date, Year at Time
        </p>
        <p>
            <?= date("F jS, Y", strtotime($time)) ." at ". date("g:iA", strtotime($time)); ?>
        </p>
    </div>
    <div>
        <p>
            Format: Month Date, Year
        </p>
        <p>
            <?= date("F jS, Y", strtotime($time))?>
        </p>
    </div>
    <div>
        <p>
            Format: Day at Time
        </p>
        <p>
            <?= date("D", strtotime($time))." at ". date("g:iA", strtotime($time));?>
        </p>
    </div>
        <p>
            # amount ago
        </p>
    <?php
    function get_time_ago( $time )
        {
            $time_difference = time() - $time;
        
            if( $time_difference < 1 ) { return 'less than 1 second ago'; }
            $condition = array( 12 * 30 * 24 * 60 * 60 =>  'year',
                        30 * 24 * 60 * 60       =>  'month',
                        24 * 60 * 60            =>  'day',
                        60 * 60                 =>  'hour',
                        60                      =>  'minute',
                        1                       =>  'second'
            );
        
            foreach( $condition as $secs => $str )
            {
                $d = $time_difference / $secs;
        
                if( $d >= 1)
                {
                    $t = floor( $d );
                    return 'about ' . $t . ' ' . $str . ( $t > 1 ? 's' : '' ) . ' ago';
                }
            }
        }
    ?>
    <div>
        <p>
            <?= get_time_ago(strtotime($time)) ?>
        </p>
        <p>
            <?= get_time_ago(time()-5) ?>
        </p>
        <p>
            <?= get_time_ago(time()-65) ?>
        </p>
    </div>

</body>
</html>