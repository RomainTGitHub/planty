<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

  <?php wp_body_open(); ?>

  <header class="header">
    <div class=logo>
      <a href="<?php echo home_url('/'); ?>">
        <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="Logo">
      </a>
      <p>energy drink</p>
    </div>
    <nav class="lien-header">
      <a class="boutonnav1" href="">Nous rencontrer</a>
      <a class="boutonnav1" href="">Admin</a>
      <a href="boutonnav2">Commander</a>
    </nav>
  </header>