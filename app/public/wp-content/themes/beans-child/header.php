<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap" rel="stylesheet">

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

    <!--
    <nav class="lien-header">
      <div class="bouton">
        <a class="bouton1" href="">Nous rencontrer</a>
        <a class="boutonadmin">Admin</a>
      </div>
      <a class="bouton2" href="">Commander</a>
    </nav>

-->
    <div class="menunav">

      <?php wp_nav_menu(array(

        'menu' => 'Menunav',

        'container' => 'nav'

      )); ?>
    </div>
  </header>