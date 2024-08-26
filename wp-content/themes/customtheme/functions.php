<?php
/**
 * Custom Theme functions and definitions
 *
 * 
 *
 * @package Custom Theme
 * @since Custom Theme 1.0
 */

/**
 * Register block styles.
 */



/**
 * Proper way to enqueue scripts and styles.
 */



function customtheme_setup() {

    	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );


    /*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );
    add_image_size( 'customtheme-featured-image', 2000, 1200, true );
	add_image_size( 'customtheme-thumbnail-avatar', 100, 100, true );



    // Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

    // Load default block styles.
    /*---------gutenberg editor support ----------- */
	add_theme_support( 'wp-block-styles' );

	// Add support for responsive embeds.
    /*---------gutenberg editor support ----------- */
	add_theme_support( 'responsive-embeds' );
}


 /**-------enqueue style and script in custom theme----------------- start------ */
function wpdocs_theme_name_scripts() {
	wp_enqueue_style( 'main-style', get_stylesheet_uri()) ;

	wp_enqueue_style( 'script-for-thme', get_template_directory_uri(). '/js/script.js' , array('jquery'), null, true);
}
add_action( 'wp_enqueue_scripts', 'wpdocs_theme_name_scripts');

 /**-------enqueue style and script in custom theme----------------- end------ */



/**--------site----menu----------start ---- */
function register_custom_nav_menu(){

    //menu register code 
    register_nav_menus(
                array(
                    'primary-menu' => ('Primary Menu'),
                    'footer-menu' => ('Footer Menu')
                ) 
            );
}
add_action( 'init', 'register_custom_nav_menu');
/**--------site----menu----------end ---- */



/**--------sitelogo-setup-----------start ---- */
function custom_logo_setup(){
    
    $defaults = array(
        'height' => 50,
        'width' => 177,
        'flex-height' => true,
        'flex-width' => true,
        'header-text' => array ( 'site-title' => 'site-description'),
    );
    add_theme_support('custom-logo', $defaults);
}
add_action('after_setup_theme', 'custom_logo_setup');
/**--------sitelogo-setup-----------end ---- */



/**-------widgets in appearances----------start ---- */
function widget_register_sidebar(){


    register_sidebar(
        array(
            'name' => __('Footer Sidebar Widget' , 'theme_name'),
            'id' => 'footer-widget-main',
            'before-widget' => '<div id="%1$s" class="widget-one">',
            'after-widget' => '</div>',
            'before-title' => '<h1 class="widget-title">',
            'after-title' => '</h1>',
        )
    );

      
        register_sidebar(
            array(
                'name' => __('Header Widget' , 'theme_name'),
                'id' => 'header-widget',
                'before-widget' => '<div id="%1$s" class="widget-two">',
                'after-widget' => '</div>',
                'before-title' => '<h1 class="header-title">',
                'after-title' => '</h1>',
            )
        );

        register_sidebar(
            array(
                'name' => __(' Widget' , 'theme_name'),
                'id' => 'site-footer-widget',
                'before-widget' => '<div id="%1$s" class="widget-three">',
                'after-widget' => '</div>',
                'before-title' => '<h1 class="footer-title">',
                'after-title' => '</h1>',
            )
        );
      
   
}
add_action('widgets_init','widget_register_sidebar');

/**-------widgets in appearances----------end ---- */



/*-------------------code- --------to add SVG to allowed file uploads ------------start-------- */
function add_file_types_to_uploads($file_types){

    $new_filetypes = array();
    $new_filetypes['svg'] = 'image/svg+xml';
    $file_types = array_merge($file_types, $new_filetypes );

    return $file_types;
}
add_action('upload_mimes', 'add_file_types_to_uploads');
/*-------------------code- --------to add SVG to allowed file uploads ------------end-------- */



 
 
 
 
 


?>



