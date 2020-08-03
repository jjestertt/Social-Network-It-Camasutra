<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
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
                    <img src="img/main-logo.png" alt="logo" class="main__logo">
                    <h1 class="main__title">MODERN AXURE TEMPLATE
                        FOR BEAUTIFUL PROTOTYPES</h1>
                    <div class="main__line"></div>
                    <p class="main__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                        euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                        accumsan et viverra justo commodo.</p>
                    <a href="#" class="main__button">Download</a>
                </div>
                <div class="main__left">
                    <form action="" class="main__form">
                        <label for="" class="main__form-label">Try Your <span class="main__form-label_span">FREE</span>
                            Trial Today</label>
                        <input type="text" class="main__form-item" placeholder="Name">
                        <input type="email" class="main__form-item" placeholder="E-mail">
                        <input type="password" class="main__form-item" placeholder="Password">
                        <button type="submit" class="main__form-button">Get Started</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section class="contact" id="contact">
        <div class="container">
            <div class="contact__wrapper">
                <div class="contact__left">
                    <h2 class="contact__title">Social Media</h2>
                    <p class="contact__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet.</p>
                </div>
                <div class="contact__right">
                    <a href="#" class="contact__item"><span class="contact__icon icon-facebook"></span></a>
                    <a href="#" class="contact__item"><span class="contact__icon icon-twitter"></span></a>
                    <a href="#" class="contact__item"><span class="contact__icon icon-google-plus"></span></a>
                    <a href="#" class=" contact__item"><span class=" contact__icon icon-pinterest-p"></span></a>
                    <a href="#" class="contact__item"><span class="contact__icon icon-instagram"></span></a>
                    <a href="#" class="contact__item"><span class="contact__icon icon-stumbleupon"></span></a>
                    <a href="#" class="contact__item"><span class="contact__icon icon-rss"></span></a>
                </div>
            </div>
        </div>
    </section>
    <section class="tabs" id="tabs">
        <div class="container">
            <div class="tabs__inner">
                <div class="tabs__right">
                    <div class="tabs__change tabs__active" id="tabBtn1">TAB 1</div>
                    <div class="tabs__change" id="tabBtn2">TAB 2</div>
                    <div class="tabs__change" id="tabBtn3">TAB 3</div>
                </div>
                <div class="tabs__center" id="tabText1">
                    <h4 class="tabs__title section__title">Tabs with soft transitioning effect.</h4>
                    <div class="tabs__line section__line"></div>
                    <p class="tabs__subtitle section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Aenean euismod
                        bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
                        justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque
                        penatibus et magnis dis parturient montes.</p>
                    <p class="tabs__subtitle section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aenean euismod bibendum laoreet.</p>
                    <a href="#" class="tabs__btn section__btn">Download</a>
                </div>
                <div class="tabs__center" id="tabText2">
                    <h4 class="tabs__title section__title">Tabs with soft transitioning effect.</h4>
                    <div class="tabs__line section__line"></div>
                    <p class="tabs__subtitle section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Aenean euismod
                        bibendum laoreet.</p>
                    <a href="#" class="tabs__btn section__btn">Download</a>
                </div>
                <div class="tabs__center" id="tabText3">
                    <h4 class="tabs__title section__title">Tabs with soft transitioning effect.</h4>
                    <div class="tabs__line section__line"></div>
                    <p class="tabs__subtitle section__subtitle">Lorem ipsum dolor sit amet.</p>
                    <p class="tabs__subtitle section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aenean euismod bibendum laoreet.</p>
                    <a href="#" class="tabs__btn section__btn">Download</a>
                </div>
                <!-- <div class="tabs__right"><img src="img//build.png" alt="build" class="tabs__img"></div> -->
            </div>
        </div>
    </section>
    <section class="list" id="list">
        <div class="container">
            <div class="list__inner">
                <div class="list__left">
                    <img class="list__img-bg section__img-bg" src="img/list-img.jpg" alt="building">
                </div>
                <div class="list__right">
                    <div class="h3 list__title section__title">Sub list section</div>
                    <div class="list__line section__line"></div>
                    <p class="list__subtitle section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                        accumsan et viverra justo commodo.</p>
                    <ul class="list__list">
                        <li class="list__item">
                            <a class="list__item-link" href="#">
                                <h4 class="list__item-title">Title</h4>
                                <p class="list__item-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aenean euismod bibendum laoreet.</p>
                            </a>
                        </li>
                        <li class="list__item">
                            <a class="list__item-link" href="#">
                                <h4 class="list__item-title">Title</h4>
                                <p class="list__item-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aenean euismod bibendum laoreet. Proin gravida dolor
                                    sit amet lacus accumsan et viverra justo commodo.</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="picture" id="picture">
        <div class="container">
            <div class="picture__inner">
                <div class="picture__left">
                    <h3 class="picture__title section__title">Standard Picture Section</h3>
                    <div class="picture__line section__line"></div>
                    <p class="picture__subtitle section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aenean
                        euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
                        et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis
                        natoque penatibus et magnis dis parturient montes.</p>
                    <p class="picture__subtitle section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aenean euismod bibendum laoreet.</p>
                </div>
                <div class="picture__right">
                    <img class="picture__img-bg section__img-bg" src="img/text-img.jpg" alt="building">
                </div>
            </div>
        </div>
    </section>
    <section class="awesome" id="awesome">
        <div class="container">
            <div class="awesome__top section-bottom__top">
                <div class="awesome__title section-bottom__title">Why this is awesome</div>
                <div class="line__title section-bottom__line"></div>
                <div class="awesome__subtitle section-bottom__subtitle">Lorem ipsum dolor sit amet, consectetur
                    adipiscing
                    elit.</div>
            </div>
            <div class="awesome__bottom">
                <div class="awesome__colum">
                    <div class="awesome-bottom__img"><span class="icon-lightbulb-o"></span></div>
                    <div class="awesome-bottom__title">Thoughtful Design</div>
                    <div class="awesome-bottom__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aenean euismod bibendum laoreet. Proin gravida
                        dolor sit amet lacus accumsan et viverra.</div>
                </div>
                <div class="awesome__colum">
                    <div class="awesome-bottom__img"><span class="icon-keyboard-o"></span></div>
                    <div class="awesome-bottom__title">Well Crafted</div>
                    <div class="awesome-bottom__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aenean euismod bibendum laoreet. Proin gravida
                        dolor sit amet lacus accumsan et viverra.</div>
                </div>
                <div class="awesome__colum">
                    <div class="awesome-bottom__img"><span class="icon-flash"></span></div>
                    <div class="awesome-bottom__title">Easy to Customize</div>
                    <div class="awesome-bottom__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aenean euismod bibendum laoreet. Proin gravida
                        dolor sit amet lacus accumsan et viverra.</div>
                </div>
            </div>
        </div>
    </section>
<?php
get_footer();
