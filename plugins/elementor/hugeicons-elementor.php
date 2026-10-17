<?php
/**
 * Plugin Name: Exinoicons Pro
 * Description: Elementor widgets for Exinoicons, providing an extensive icon library.
 * Plugin URI:  https://exinoicons.com
 * Version:     1.0.0
 * Author:      Exinoicons Team
 * Author URI:  https://halallab.co
 * Text Domain: exinoicons-elementor
 *
 * Elementor tested up to: 3.16.0
 * Elementor Pro tested up to: 3.16.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Define plugin constants
const HUGEICONS_PRO_VERSION = '1.0.0';
define( 'HUGEICONS_PRO_DIR', plugin_dir_path( __FILE__ ) );
define( 'HUGEICONS_PRO_URL', plugin_dir_url( __FILE__ ) );

function exinoicons_pro(): void
{

    // Load plugin file
    require_once( __DIR__ . '/includes/plugin.php' );

    // Run the plugin
    \Exinoicons_Pro\Plugin::instance();

}
add_action( 'plugins_loaded', 'exinoicons_pro' );
