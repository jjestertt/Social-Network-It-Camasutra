<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package axit
 */

?>
    <footer class="footer">
        <div class="container">
            <div class="footer__top">
                <a href="<?php the_field('facebook'); ?>" class="footer__item"><span class="footer__icon icon-facebook"></span></a>
                <a href="<?php the_field('twitter'); ?>" class="footer__item"><span class="footer__icon icon-twitter"></span></a>
                <a href="<?php the_field('google-plus'); ?>" class="footer__item"><span class="footer__icon icon-google-plus"></span></a>
                <a href="<?php the_field('pinterest'); ?>" class="footer__item"><span class="footer__icon icon-pinterest-p"></span></a>
                <a href="<?php the_field('instagram'); ?>" class="footer__item"><span class="footer__icon icon-instagram"></span></a>
                <a href="<?php the_field('stumbleupon'); ?>" class="footer__item"><span class="footer__icon icon-stumbleupon"></span></a>
                <a href="<?php the_field('rss'); ?>" class="footer__item"><span class="footer__icon icon-rss"></span></a>
            </div>
            <div class="footer__bottom">
            
                <p class="footer__copyright"><?php the_field('footer__text'); ?></p>
            </div>
        </div>
    </footer>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="<?php echo get_template_directory_uri (); ?>/js/main.js"></script>
</body>

</html>
