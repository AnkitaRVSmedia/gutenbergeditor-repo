<?php 
/*
Plugin Name: Voice Translator
Author: Anonmyous
Description: This plugin will translate the voice and provide the caption for the voice.
Version: 1.1
*/

if(!defined('ABSPATH')){
 die();
}

//-------------Activate the custom plugin--------------------
function plugin_activation(){
global $wpdb , $table_prefix;

$wpemp = $table_prefix . "emp";
$q= "CREATE TABLE IF NOT EXISTS `$wpemp` (`ID` INT NOT NULL , `F_name` VARCHAR(50) NOT NULL , `L_name` VARCHAR(50) NOT NULL , `email` VARCHAR(80) NOT NULL , PRIMARY KEY (`ID`)) ENGINE = InnoDB;";

$wpdb->query($q);

$add_entry = "INSERT INTO `wp_emp` (`ID`, `F_name`, `L_name`, `email`) VALUES ('1', 'Test', 'Test Company', 'test@gmail.com');";
$wpdb->query($add_entry);
}
register_activation_hook(__FILE__, "plugin_activation");



//-------------DEActivate the custom plugin--------------------
function plugin_deactivation(){
global $wpdb, $table_prefix;

$empty_table = "TRUNCATE TABLE `testwordpress`.`wp_emp`";
$wpdb->query($empty_table);

}
register_deactivation_hook(__FILE__, "plugin_deactivation");



//--------Enqueue the Script file--in custom plugin----------------
function custom_script(){

    //     // Correct URL function and file path
    $path = plugins_url('js/main.js', __FILE__);
    $dep = array('jquery');
    $ver = filemtime(plugin_dir_path(__FILE__) . 'js/main.js');


  // Enqueue the script
    wp_enqueue_script('plugin-custom-js', $path, $dep, $ver);

}
add_action('wp_enqueue_scripts', 'custom_script');
 




/** Step 2 (from text above). */
add_action( 'admin_menu', 'custom_plugin_menu' );


/** Step 1. */
function custom_plugin_menu() {

/**-----add the top-level menu in dashboard----- */
add_menu_page('Voice Recorder', 'Voice Recorder', 'manage_options', 'voice-recorder-menu', 'voice_recorder_menu_function');
add_submenu_page( 'custom-plugin-menu', 'Voice Recorder', 'Record Voice', 'manage_options', 'voice-recorder-sub-menu', 'custom_sub_menu_function');
}

// mt_toplevel_page() displays the page content for the custom Test Toplevel menu
function custom_plugin_menu_function() {
    
    include(plugin_dir_path( __FILE__ ).'form.php');
    
}

// mt_sublevel_page() displays the page content for the first submenu
// of the custom Test Toplevel menu
function custom_sub_menu_function() {
    echo "<h2>" . __( 'Test Sublevel', 'menu-test' ) . "</h2>";
}

?>