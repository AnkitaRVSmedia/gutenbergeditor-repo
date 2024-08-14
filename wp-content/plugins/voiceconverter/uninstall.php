<?php 

if(!defined('WP_UNINSTALL_PLUGIN')){
    die();
   }

//-------------Uninstall the custom plugin--------------------


global $wpdb, $table_prefix;

$wpemp = $table_prefix ."emp";

$drop_table = "DROP TABLE IF EXISTS $wpemp";
$wpdb->query($drop_table);

?>