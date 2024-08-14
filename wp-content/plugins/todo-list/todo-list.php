<?php
/**
 * Plugin Name:       Todo List
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       todo-list
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_todo_list_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_todo_list_block_init' );


// Enqueue FontAwesome for the front end
function my_enqueue_fontawesome() {
    wp_enqueue_style(
        'fontawesome',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
        array(), // Dependencies, if any
        null   // Version number, optional
    );
    wp_enqueue_style('accordion-script',  get_template_directory('/assets/js/script.js'), array(), 1.1);
}
add_action('wp_enqueue_scripts', 'my_enqueue_fontawesome');

// Enqueue FontAwesome for the block editor
function my_enqueue_fontawesome_editor() {
    wp_enqueue_style(
        'fontawesome-editor',   
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
        array(), // Dependencies, if any
        null   // Version number, optional
    );
}
add_action('enqueue_block_editor_assets', 'my_enqueue_fontawesome_editor');
