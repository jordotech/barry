<?php

/**
 * @file
 * Display Suite example layout configuration.
 */

function barney() {
  return array(
    'label' => t('Barney'),
    'regions' => array(
      'header' => t('Header'),
      'left1' => t('Left'),
	  'middle1' => t('Middle'),
      'right1' => t('Right'),
	  'footer' => t('Footer'),
    ),
    // Uncomment if you want to include a CSS file for this layout (example_layout.css)
    'css' => TRUE,
    // Uncomment if this is a template for a node form.
    // 'form' => TRUE,
  );
}
