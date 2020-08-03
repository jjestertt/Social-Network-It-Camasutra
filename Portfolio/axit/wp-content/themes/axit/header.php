<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package axit
 */

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Axit</title>
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Raleway:ital,wght@0,300;1,400&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/font.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/normalize.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/main.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/media.css">
</head>

<body>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <a href="#" class="header__logo">
                    <img src="<?php the_field('header-logo'); ?>">
                </a>
                <nav class="header__menu">
                    <div class="header__menu-btn-wrapper">
                        <div class="header__menu-btn-inner"></div>
                    </div>
                    <ul class="header__menu-list">
                        <?php if( have_rows('header__menu') ): while ( have_rows('header__menu') ) : the_row(); ?>
                            <li class="header__menu-item"><a href="<?php the_sub_field('header__menu-item-link'); ?>"><?php the_sub_field('header__menu-item-name'); ?></a></li>
                        <?php endwhile; endif; ?>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
