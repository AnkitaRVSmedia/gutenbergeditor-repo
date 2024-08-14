<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Custom_Theme
 * @since Custom Theme 1.0
 * @version 1.2
 */

?>

		</div><!-- #content -->

		
		</div><!-- .site-content-contain -->
	<footer id="site-footer" class="site-footer">
	<div class="footer container">
		<div class="footer-content">
			<?php dynamic_sidebar('footer-widget-main'); ?>
		</div>
	</div>
		</footer><!-- #colophon -->
</div><!-- #page -->
<?php wp_footer(); ?>

</body>
</html>
