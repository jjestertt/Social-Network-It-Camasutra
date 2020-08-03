<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'axit-bd' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'root' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'y{sOzB=U-:0CJJSCJ4pZO:)>R1>&>AeP+;=?g SY=D_AM/R4uoZ6bo,Qo{kOarz!' );
define( 'SECURE_AUTH_KEY',  ':5-h.&o;!~ NK1086H=W*;BV^S`{MamE2>.3ioL*@k,xa!ztptSNg@1ccnl}2D{T' );
define( 'LOGGED_IN_KEY',    '@_~Jq-S->!WPzdl,!4|#j}617q0v]GALc%io}vtL)n6S!v)>#bYc3JH.w5k3Hx9H' );
define( 'NONCE_KEY',        'AldXJ!n%>wA}:1.^DYsSXu!CTf_i9h+pWhIy1suBbsfnO6+,@m>d#IkBdL30~mGk' );
define( 'AUTH_SALT',        ']I){BPQa|wZd`)3(HVf|0a3#,cWT*FglYl&6}@Hh+A5B_ogO3jwTyFHH-SjE?JOL' );
define( 'SECURE_AUTH_SALT', '$F>GU@<o[CO,=W>F/2h9ljFkF)zrN^JrGSD b7n/Hl!d zz-y43$qoIoO>lu!*MK' );
define( 'LOGGED_IN_SALT',   'zqT,!wazFHPWQ;[;}1s_aIT}~zr_ T^k&[Dde{mi[*T*ZP`EGYTI.8~!=y{qfUiN' );
define( 'NONCE_SALT',       'K@_0n1@XfHTUCmwNoYiq_P6@KGTM}.H_hLLqe#b-oIVce7xjq4la}j*4`[#QQHpV' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );
