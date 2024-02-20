<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '(J.@GJ0(A<|+48:+M$H`HFf#L*-e.:gMGxIw:A^Lw/T*(pl-~oOOKZlC4&hhlBw(' );
define( 'SECURE_AUTH_KEY',   '`#{EQ2}B%2:Ce<~3@vw(!V/sC*W+Rf[fPKFz4Tns :T{9R^#G-?K7$YqMQ?,C4& ' );
define( 'LOGGED_IN_KEY',     '`u;(2Jn,ndmZ<DnLHTTSOtg@_fa0T+%5V&n9e-7QyE(W7J<}XNaM$1!nS%e)*>zx' );
define( 'NONCE_KEY',         '^lg./]$Btgje6p.mT`?Hrn0q5RSX *9!E`(r,&5F_B.zh-_Co77bVXHG-gZDl2Y`' );
define( 'AUTH_SALT',         'dIoEPU&%v~JZ<0-p7WpaF3m^MY0j(Q@vSoVCSmS6C1%sxD22>Pk)Hxc|HgcSb82:' );
define( 'SECURE_AUTH_SALT',  '~M>W6*EmXer4I?X;Ss#z5@rB(X^!!TR&xsc<[N`V%Nl2R.dYG|uUkvTCJr3PB 0X' );
define( 'LOGGED_IN_SALT',    'myZbb;?P09HY CQ+*MfJ,91yrPaN[`@gv_Xu6nN?JnayTI!l!AKgwQUETf1:@POA' );
define( 'NONCE_SALT',        'HF97p@LE@]K9RHP5Uc/?}[$5h<Qe|K[D+j~/y$0WhX[SAkZ/Uihga-X=[s 6]aYq' );
define( 'WP_CACHE_KEY_SALT', '=uzo)AgOVyCqxLi0CXuBnq{;iAx~:*d I,1)~_QcW=BY^zzv#Z*teRi>RyQ*vhOg' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
