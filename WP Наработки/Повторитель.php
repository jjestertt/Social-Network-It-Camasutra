<?php if( have_rows('header__menu') ): while ( have_rows('header__menu') ) : the_row(); ?>
    <li class="header__menu-item"><a href="<?php the_sub_field('header__menu-item-link'); ?>"><?php the_sub_field('header__menu-item-name'); ?></a></li>
<?php endwhile; endif; ?>