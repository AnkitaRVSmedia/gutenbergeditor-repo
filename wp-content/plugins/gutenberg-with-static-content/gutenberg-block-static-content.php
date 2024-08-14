<?php  
/*
* Plugin Name: Gutenberg Block: Static Example
 * Description: A example Gutenberg block with static content.
 * Author: ModularWP
 * Author URI: By Anonymousvxsdfsfsd
 * Version: 1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * 
 * block function.......
 */

// function custom_block_script(){
// 	wp_enqueue_script('gutenberg-custom-block', plugin_dir_path(__FILE__).'js/block.js', array('wp-blocks', 'wp-i18in', 'wp-editor'), true, false);
	
// 	wp_enqueue_style(
//         'my-custom-block-editor-style', // Handle
//         plugins_url( 'css/editor.css', __FILE__ ), // Path to the editor styles
//         array( 'wp-edit-blocks' ), // Dependency
//         filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // Version
//     );

//     wp_enqueue_style(
//         'my-custom-block-style', // Handle
//         plugins_url( 'css/style.css', __FILE__ ), // Path to the front-end styles
//         array(), // No dependencies
//         filemtime( plugin_dir_path( __FILE__ ) . 'style.css' ) // Version
//     );
// }
// add_action('enqueue_block_editor_assets', 'custom_block_script');






//-------------Activate the custom plugin--------------------
function plugin_activation_guten(){
	global $wpdb , $table_prefix;
	
	$wpemp = $table_prefix . "gutenelement";
	$q= "CREATE TABLE IF NOT EXISTS `$wpemp` (`ID` INT NOT NULL , `Element_name` VARCHAR(50) NOT NULL , `email` VARCHAR(80) NOT NULL , PRIMARY KEY (`ID`)) ENGINE = InnoDB;";
	
	$wpdb->query($q);
	
	$add_entry = "INSERT INTO `wp_emp` (`ID`, `Element_name`, `email`) VALUES ('999', 'Test', 'test@gmail.com');";
	$wpdb->query($add_entry);
}
register_activation_hook(__FILE__, "plugin_activation_guten");



//-------------DEActivate the custom plugin--------------------
function plugin_deactivation_guten(){
	global $wpdb, $table_prefix;
	
	$empty_table = "TRUNCATE TABLE `gutenbergelement`.`wp_emp`";
	$wpdb->query($empty_table);
	
}
register_deactivation_hook(__FILE__, "plugin_deactivation_guten");




/*
Gutenberg block examples dynamic
*/

function gutenberg_examples_dynamic_render_callback( $block_attributes, $content ) {
    $recent_posts = wp_get_recent_posts( array(
        'numberposts' => 1,
        'post_status' => 'publish',
    ) );
    if ( count( $recent_posts ) === 0 ) {
        return 'No posts';
    }
    $post = $recent_posts[ 0 ];
    $post_id = $post['ID'];
    return sprintf(
        '<a class="wp-block-my-plugin-latest-post" href="%1$s">%2$s</a>',
        esc_url( get_permalink( $post_id ) ),
        esc_html( get_the_title( $post_id ) )
    );
}

function gutenberg_examples_dynamic() {
    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_register_script(
        'gutenberg-examples-dynamic',
        plugins_url( 'build/block.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    register_block_type( 'gutenberg-examples/example-dynamic', array(
        'api_version' => 3,
        'editor_script' => 'gutenberg-examples-dynamic',
        'render_callback' => 'gutenberg_examples_dynamic_render_callback'
    ) );

}
add_action( 'init', 'gutenberg_examples_dynamic' );




?>