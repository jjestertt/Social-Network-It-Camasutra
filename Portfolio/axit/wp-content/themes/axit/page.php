<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package axit
 */

get_header();
?>
    <section class="main">
        <div class="container">
            <div class="main__inner">
                <div class="main__right">
                    <img class="main__logo" src="<?php the_field('main__logo'); ?>" >
                    <h1 class="main__title"><?php the_field('main__title'); ?></h1>
                    <div class="main__line"></div>
                    <p class="main__subtitle"><?php the_field('main__subtitle'); ?></p>
                    <a href="#" class="main__button"><?php the_field('main__button-text'); ?></a>
                </div>
                <div class="main__left">
                    <form action="" class="main__form">
                    		<!-- Hidden Required Fields -->
                            <input type="hidden" name="project_name" value="AxitSite">
                            <input type="hidden" name="admin_email" value="jjestertt@gmail.com">
                            <input type="hidden" name="form_subject" value="Form Subject">
                            <!-- END Hidden Required Fields -->
                        <label for="" class="main__form-label"><?php the_field('main__form-titile'); ?></label>
                        <input name="Имя" type="text" class="main__form-item" placeholder="Name">
                        <input name="E-mail" type="email" class="main__form-item" placeholder="E-mail">
                        <input type="Phone" class="main__form-item" placeholder="Phone">
                        <button type="submit" class="main__form-button"><?php the_field('main__form-button'); ?></button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section class="contact" id="contact">
        <div class="container">
            <div class="contact__wrapper">
                <div class="contact__left">
                    <h2 class="contact__title"><?php the_field('contact__title'); ?></h2>
                    <p class="contact__subtitle"><?php the_field('contact__subtitle'); ?></p>
                </div>
                <div class="contact__right">
                    <a href="<?php the_field('facebook'); ?>" class="contact__item"><span class="contact__icon icon-facebook"></span></a>
                    <a href="<?php the_field('twitter'); ?>" class="contact__item"><span class="contact__icon icon-twitter"></span></a>
                    <a href="<?php the_field('google-plus'); ?>" class="contact__item"><span class="contact__icon icon-google-plus"></span></a>
                    <a href="<?php the_field('pinterest'); ?>" class="contact__item"><span class="contact__icon icon-pinterest-p"></span></a>
                    <a href="<?php the_field('instagram'); ?>" class="contact__item"><span class="contact__icon icon-instagram"></span></a>
                    <a href="<?php the_field('stumbleupon'); ?>" class="contact__item"><span class="contact__icon icon-stumbleupon"></span></a>
                    <a href="<?php the_field('rss'); ?>" class="contact__item"><span class="contact__icon icon-rss"></span></a>
                </div>
            </div>
        </div>
    </section>
    <section class="tabs" id="tabs">
        <div class="container" style="background-image: url(<?php the_field('tabs__bg'); ?>)">
            <div class="tabs__inner">
                <div class="tabs__right">
                    <div class="tabs__change tabs__active" id="tabBtn1">TAB 1</div>
                    <div class="tabs__change" id="tabBtn2">TAB 2</div>
                    <div class="tabs__change" id="tabBtn3">TAB 3</div>
                </div>
                <div class="tabs__center" id="tabText1">
                <?php
                    $tabs__one = get_field('tabs__one');	
                    if( $tabs__one ): ?>
                        <h4 class="tabs__title section__title"><?php echo $tabs__one['tabs__one-title']; ?></h4>
                        <div class="tabs__line section__line"></div>
                        <p class="tabs__subtitle section__subtitle"><?php echo $tabs__one['tabs__one-subtitle']; ?></p>
                        <a href="#" class="tabs__btn section__btn"><?php echo $tabs__one['tabs__one-btn']; ?></a>
                    <?php endif; ?>                   
                </div>
                <div class="tabs__center" id="tabText2">
                 <?php
                    $tabs__two = get_field('tabs__two');	
                    if( $tabs__two ): ?>
                        <h4 class="tabs__title section__title"><?php echo $tabs__two['tabs__two-title']; ?></h4>
                        <div class="tabs__line section__line"></div>
                        <p class="tabs__subtitle section__subtitle"><?php echo $tabs__two['tabs__two-subtitle']; ?></p>
                        <a href="#" class="tabs__btn section__btn"><?php echo $tabs__two['tabs__two-btn']; ?></a>
                <?php endif; ?>
                </div>
                <div class="tabs__center" id="tabText3">
                <?php
                    $tabs__three = get_field('tabs__three');	
                    if( $tabs__three ): ?>
                        <h4 class="tabs__title section__title"><?php echo $tabs__three['tabs__three-title']; ?></h4>
                        <div class="tabs__line section__line"></div>
                        <p class="tabs__subtitle section__subtitle"><?php echo $tabs__three['tabs__three-subtitle']; ?></p>
                        <a href="#" class="tabs__btn section__btn"><?php echo $tabs__three['tabs__three-btn']; ?></a>
                <?php endif; ?>
                </div>
            </div>
        </div>
    </section>
    <section class="list" id="list">
        <div class="container">
            <div class="list__inner">
                <div class="list__left">
                    <img class="list__img-bg section__img-bg" src="<?php the_field('list__img'); ?>">
                </div>
                <div class="list__right">
                    <div class="h3 list__title section__title"><?php the_field('list__title'); ?></div>
                    <div class="list__line section__line"></div>
                    <p class="list__subtitle section__subtitle"><?php the_field('list__subtitle'); ?></p>
                    <ul class="list__list">
                    <?php if( have_rows('list__item') ): while ( have_rows('list__item') ) : the_row(); ?>
                        <li class="list__item">
                            <a class="list__item-link" href="<?php the_sub_field('list__item-link'); ?>">
                                <h4 class="list__item-title"><?php the_sub_field('list__item-title'); ?></h4>
                                <p class="list__item-subtitle"><?php the_sub_field('list__item-subtitle'); ?></p>
                            </a>
                        </li>
                    <?php endwhile; endif; ?>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="picture" id="picture">
        <div class="container">
            <div class="picture__inner">
                <div class="picture__left">
                    <h3 class="picture__title section__title"><?php the_field('picture__title'); ?></h3>
                    <div class="picture__line section__line"></div>

                    <?php if( have_rows('picture__subtitle') ): while ( have_rows('picture__subtitle') ) : the_row(); ?>
                        <p class="picture__subtitle section__subtitle"><?php the_sub_field('picture__paragraph'); ?></p>
                    <?php endwhile; endif; ?>
                </div>
                <div class="picture__right">
                    <img class="picture__img-bg section__img-bg" src="<?php the_field('picture__bg'); ?>">
                </div>
            </div>
        </div>
    </section>
    <section class="awesome" id="awesome">
        <div class="container">
            <div class="awesome__top section-bottom__top">
                <div class="awesome__title section-bottom__title"><?php the_field('awesome__title'); ?></div>
                <div class="line__title section-bottom__line"></div>
                <div class="awesome__subtitle section-bottom__subtitle"><?php the_field('awesome__subtitle'); ?></div>
            </div>
            <div class="awesome__bottom">
                <?php if( have_rows('awesome__colum') ): while ( have_rows('awesome__colum') ) : the_row(); ?>
                    <div class="awesome__colum">
                        <div class="awesome-bottom__img"><span class="<?php the_sub_field('awesome-bottom__icon'); ?>"></span></div>
                        <div class="awesome-bottom__title"><?php the_sub_field('awesome-bottom__title'); ?></div>
                        <div class="awesome-bottom__text"><?php the_sub_field('awesome-bottom__text'); ?></div>
                    </div>
                <?php endwhile; endif; ?>
            </div>
        </div>
    </section>
<?php
get_footer();
