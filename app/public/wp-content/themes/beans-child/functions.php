<?php

/**
 * Recommended way to include parent theme styles.
 * (Please see http://codex.wordpress.org/Child_Themes#How_to_Create_a_Child_Theme)
 *
 */

add_action('wp_enqueue_scripts', 'beans_child_style');
function beans_child_style()
{
	wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
	wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style'));
} ?>

<?php

// Ajouter la prise en charge des images mises en avant
add_theme_support('post-thumbnails');

// Ajouter automatiquement le titre du site dans l'en-tête du site
add_theme_support('title-tag'); ?>

<?php
function default_page_menu()
{
	wp_list_pages('title_li=');
} ?>

<?php
function lien_admin($items, $args)
{
	if (is_user_logged_in()) {
		// Récupérer l'URL de l'interface d'administration
		$admin_url = get_admin_url();
		// Ajouter le lien vers la page d'administration dans le menu
		$admin_link = '<li><a href="' . esc_url($admin_url) . '">Admin</a></li>';
		$menu_items = explode('</li>', $items);
		// Insérer le lien vers la page d'administration en deuxième position
		array_splice($menu_items, 1, 0, $admin_link);
		// Convertir le tableau en chaîne de caractères
		$items = implode('</li>', $menu_items) . '</li>';
	}
	return $items;
}
add_filter('wp_nav_menu_items', 'lien_admin', 10, 2); ?>